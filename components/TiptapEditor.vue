<template>
    <div class="editor-container">
        <!-- Toolbar -->
        <div class="editor-toolbar">
            <!-- Bold -->
            <button class="btn" :class="{ 'active': editor?.isActive('bold') }"
                @click="editor.chain().focus().toggleBold().run()" title="Bold">
                <BoldIcon class="size-4" />
            </button>

            <!-- Italic -->
            <button class="btn" :class="{ 'active': editor?.isActive('italic') }"
                @click="editor.chain().focus().toggleItalic().run()" title="Italic">
                <ItalicIcon class="size-4" />
            </button>

            <!-- Strike -->
            <button class="btn" :class="{ 'active': editor?.isActive('strike') }"
                @click="editor.chain().focus().toggleStrike().run()" title="Strikethrough">
                <StrikethroughIcon class="size-4" />
            </button>

            <!-- Bullet List -->
            <button class="btn" :class="{ 'active': editor?.isActive('bulletList') }"
                @click="editor.chain().focus().toggleBulletList().run()" title="Bullet List">
                <ListIcon class="size-4" />
            </button>

            <!-- Ordered List -->
            <button class="btn" :class="{ 'active': editor?.isActive('orderedList') }"
                @click="editor.chain().focus().toggleOrderedList().run()" title="Ordered List">
                <ListOrderedIcon class="size-4" />
            </button>

            <!-- Heading -->
            <button class="btn" :class="{ 'active': editor?.isActive('heading', { level: 1 }) }"
                @click="editor.chain().focus().toggleHeading({ level: 1 }).run()" title="Heading 1">
                <Heading1Icon class="size-4" />
            </button>

            <button class="btn" :class="{ 'active': editor?.isActive('heading', { level: 2 }) }"
                @click="editor.chain().focus().toggleHeading({ level: 2 }).run()" title="Heading 2">
                <Heading2Icon class="size-4" />
            </button>
        </div>

        <!-- Content Area -->
        <div class="editor-content" :class="{ 'prose': true }">
            <editor-content :editor="editor" />
        </div>
    </div>
</template>

<script setup>
import {
    BoldIcon,
    ItalicIcon,
    StrikethroughIcon,
    ListIcon,
    ListOrderedIcon,
    Heading1Icon,
    Heading2Icon,
} from 'lucide-vue-next';
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { Editor, EditorContent } from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';

const editor = ref(null);

onMounted(() => {
    editor.value = new Editor({
        extensions: [StarterKit],
        content: '<p>Welcome to the WYSIWYG editor!</p>',
    });
});

onBeforeUnmount(() => {
    if (editor.value) {
        editor.value.destroy();
    }
});
</script>

<style scoped>
/* Styling for toolbar buttons */
.btn {
    @apply flex items-center justify-center w-8 h-8 text-gray-700 rounded-lg hover:bg-gray-100;
}

.btn.active {
    @apply bg-blue-500 text-white;
}

/* Editor container styling */
.editor-container {
    @apply bg-white border border-gray-200 rounded-lg overflow-hidden dark:bg-neutral-800 dark:border-neutral-700;
}

.editor-toolbar {
    @apply flex align-middle gap-x-2 border-b border-gray-200 p-2 dark:border-neutral-700;
}

.editor-content {
    @apply text-sm px-4 bg-white min-h-[150px];

    &:deep(.ProseMirror:focus) {
        @apply outline-none;
    }
}
</style>