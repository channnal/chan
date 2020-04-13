module.exports = {
    title: "channnal's blog", 
    description: "channnal's blog",
    head: [
        ['link', { rel: 'icon', href: '/' }],
        ['link', { rel: 'manifest', href: '/' }],
    ],
    themeConfig: {
        // 你的GitHub仓库，请正确填写
        repo: 'https://github.com/channnal/chan.git',
        // 自定义仓库链接文字。
        repoLabel: 'My GitHub',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'FirstBlog', link: '/' }
        ]
    }
}