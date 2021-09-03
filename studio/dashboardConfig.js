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
                  buildHookId: '61325ed55389a9b52fcb8216',
                  title: 'Sanity Studio',
                  name: 'next-landing-studio',
                  apiId: 'be6de4a5-25c0-49b0-83d4-531acba15d80'
                },
                {
                  buildHookId: '61325ed5fba0d17f37ee1d33',
                  title: 'Landing pages Website',
                  name: 'next-landing-web',
                  apiId: '63ffc41b-a6df-4df1-8dbb-13931886ed54'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/venkylad/next-landing',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://next-landing-web.netlify.app', category: 'apps'}
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
