import { content } from '@/data';
import { Link, RichTextEditor as MantineRichTextEditor } from '@mantine/tiptap';
import Highlight from '@tiptap/extension-highlight';
import SubScript from '@tiptap/extension-subscript';
import Superscript from '@tiptap/extension-superscript';
import TextAlign from '@tiptap/extension-text-align';
import Underline from '@tiptap/extension-underline';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

const RichTextEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      Superscript,
      SubScript,
      Highlight,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
    ],
    content,
  });

  return (
    <MantineRichTextEditor editor={editor}>
      <MantineRichTextEditor.Toolbar bg="mineShaft.10" sticky stickyOffset={60}>
        <MantineRichTextEditor.ControlsGroup>
          <MantineRichTextEditor.Bold />
          <MantineRichTextEditor.Italic />
          <MantineRichTextEditor.Underline />
          <MantineRichTextEditor.Strikethrough />
          <MantineRichTextEditor.ClearFormatting />
          <MantineRichTextEditor.Highlight />
          <MantineRichTextEditor.Code />
        </MantineRichTextEditor.ControlsGroup>

        <MantineRichTextEditor.ControlsGroup>
          <MantineRichTextEditor.H4 />
        </MantineRichTextEditor.ControlsGroup>

        <MantineRichTextEditor.ControlsGroup>
          <MantineRichTextEditor.Blockquote />
          <MantineRichTextEditor.Hr />
          <MantineRichTextEditor.BulletList />
          <MantineRichTextEditor.OrderedList />
          <MantineRichTextEditor.Subscript />
          <MantineRichTextEditor.Superscript />
        </MantineRichTextEditor.ControlsGroup>

        <MantineRichTextEditor.ControlsGroup>
          <MantineRichTextEditor.Link />
          <MantineRichTextEditor.Unlink />
        </MantineRichTextEditor.ControlsGroup>

        <MantineRichTextEditor.ControlsGroup>
          <MantineRichTextEditor.AlignLeft />
          <MantineRichTextEditor.AlignCenter />
          <MantineRichTextEditor.AlignJustify />
          <MantineRichTextEditor.AlignRight />
        </MantineRichTextEditor.ControlsGroup>

        <MantineRichTextEditor.ControlsGroup>
          <MantineRichTextEditor.Undo />
          <MantineRichTextEditor.Redo />
        </MantineRichTextEditor.ControlsGroup>
      </MantineRichTextEditor.Toolbar>

      <MantineRichTextEditor.Content bg="mineShaft.10" />
    </MantineRichTextEditor>
  );
};
export default RichTextEditor;
