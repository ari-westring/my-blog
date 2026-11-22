import { resolve } from '$app/paths';

export const title = 'Ari!';
export const name = 'Ari Carmody';
export const description = 'A blog about me, photography, and tech';
export const siteUrl: string = 'https://blog.carmody.ie';
export const socialImageUrl: string = '';
export const repositoryUrl = 'https://github.com/ari-westring/my-blog';
export const year = new Date().getFullYear();
export const pages: { name: string; href: string }[] = [
    { name: 'Posts', href: resolve(`posts`) },
    { name: 'Tags', href: resolve(`tags`) },
    { name: 'About', href: resolve(`about`) }
];
export const socials: { name: string; href: string }[] = [
    { name: 'Mail', href: 'mailto:blog@carmody.ie' },
    { name: 'RSS', href: resolve('rss.xml') }
];
