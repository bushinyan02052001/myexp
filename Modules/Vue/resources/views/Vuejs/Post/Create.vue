<template>
    <nav class="navbar navbar-expand-md navbar-dark bg-primary">
        <a class="navbar-brand" href="#">Quản lí bài đăng</a>
        <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId"
                aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation"></button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item active">
                    <a class="nav-link" :href="route('post.show')">List bài đăng <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" :href="route('post.create')">Thêm bài đăng<span class="sr-only">(current)</span></a>
                </li>
            </ul>
        </div>
    </nav>
    <div>
        <h1>Create Post</h1>
        <form @submit.prevent="submit">
            <label for="title">Title</label>
            <input v-model="form.title" type="text" name="title">

            <label for="content">Content</label>
            <textarea v-model="form.content" name="content"></textarea>

            <button type="submit">Create</button>
        </form>
    </div>
</template>
<script>

export default {
    data() {
        return {
            form: {
                title: '',
                content: ''
            }
        };
    },
    methods: {
        submit() {
            Inertia.post(route('posts.store'), this.form);
        }
    }
};
</script>


