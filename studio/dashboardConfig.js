export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '63263f7c78b23e1b46216907',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-1-studio-cfaybpve',
                  apiId: 'a0c28c89-e700-497f-b73a-dadfe13f9233'
                },
                {
                  buildHookId: '63263f7c78b23e1bca216855',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-1-web-ww84syxz',
                  apiId: '1814865b-38b8-45e7-b1f8-0e3b8f4e8d98'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bionicguy/sanity-nextjs-landing-pages1',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-1-web-ww84syxz.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
