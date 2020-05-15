module.exports = {
    themeConfig: {
        smoothScroll: true,
        logo: '/icon.png',
        lastUpdated: 'آخرین ویرایش',
        nextLinks: true,
        // default value is true. Set it to false to hide prev page links on all pages
        prevLinks: true,
        repo: 'savyir/nuxtjs',
        repoLabel: 'ریپوی ما!',
        editLinks: true,
        // custom text for edit link. Defaults to "Edit this page"
        editLinkText: 'اگر این صفحه نیاز به اصلاح دارد لطفا یک پول ریکوئست بدهید',
        searchPlaceholder: 'جست و جو...',
        nav: [
            {text: 'صفحه نخست', link: '/'},
            {text: 'مستندات راهنما', link: '/guide/'},
            {text: 'مثال ها', link: '/examples/'},
            {text: 'قالب ها', link: 'http://vip.nuxt-js.ir/templates'},
//            {text: 'پشتیبانی', link: 'http://vip.nuxt-js.ir/ask'},

            {
                text: 'مراجع کمکی',
                ariaLabel: 'سایت های اصلی مرجع',
                items: [
                    {text: 'ناکس جهانی', link: 'https://nuxtjs.org', target: '_blank'},
                    {text: 'ویو', link: 'https://vuejs.org', target: '_blank'},
                    {text: 'ویوتیفای', link: 'https://vuetifyjs.com', target: '_blank'},
                ]
            },
            {text: 'ساوی', link: 'https://savy.ir', target: '_blank'},
        ]
    },
    sidebarDepth: 4,
    displayAllHeaders: true,
    sidebar: [
        '/',
        '/intro',
        '/concepts',
        {
            title: 'مقدمه و شروع',   // required
            path: '/guide',      // optional, link of the title, which should be an absolute path and must exist
            collapsable: true, // optional, defaults to true
            sidebarDepth: 4,    // optional, defaults to 1

        },
        {
            title: 'مفاهیم کلی',   // required
            path: '/guide',      // optional, link of the title, which should be an absolute path and must exist
            collapsable: true, // optional, defaults to true
            sidebarDepth: 4,    // optional, defaults to 1
            children: [
                '/'
            ]
        },
    ],
}
