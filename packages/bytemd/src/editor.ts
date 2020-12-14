import type { Editor } from 'codemirror';

export type EditorUtils = ReturnType<typeof createUtils>;

export function createUtils(editor: Editor) {
  return {
    /**
     * Wrap text with decorators, for example:
     *
     * `text -> *text*`
     */
    wrapText(before: string, after = before) {
      const [selection] = editor.listSelections(); // only handle the first selection
      console.log(editor.listSelections());
      const text = editor.getRange(selection.anchor, selection.head) || 'text';
      editor.replaceRange(
        before + text + after,
        selection.anchor,
        selection.head
      );

      const cursor = editor.getCursor();
      editor.setSelection(
        {
          line: cursor.line,
          ch: cursor.ch - after.length - text.length,
        },
        {
          line: cursor.line,
          ch: cursor.ch - after.length,
        }
      );
      editor.focus();
    },
    /**
     * replace multiple lines
     *
     * `line -> # line`
     */
    replaceLines(replace: (lines: string[]) => string[]) {
      const [selection] = editor.listSelections();
      const lines = editor
        .getRange(
          { line: selection.anchor.line, ch: 0 },
          // @ts-ignore
          { line: selection.head.line }
        )
        .split('\n');

      editor.replaceRange(
        replace(lines).join('\n'),
        { line: selection.anchor.line, ch: 0 },
        // @ts-ignore
        { line: selection.head.line }
      );
      editor.focus();
    },
  };
}
