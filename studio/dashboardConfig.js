export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5faf33011db4d72abe563b7c',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-88x92ja9',
                  apiId: '8743b7a1-4926-4795-9bd7-9336cec7b144'
                },
                {
                  buildHookId: '5faf330106e72e2c2cf07022',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-n6frhjkm',
                  apiId: '81247251-1fbe-4223-83ee-fb33dac4fefb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/felipebarcelospro/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-n6frhjkm.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
