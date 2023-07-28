module.exports = function (plop) {
  plop.setGenerator('component', {
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase  name}}/{{pascalCase  name}}.tsx',
        templateFile: 'templates/component/index.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase  name}}/{{pascalCase  name}}.stories.tsx',
        templateFile: 'templates/component/stories.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase  name}}/{{pascalCase  name}}.styles.ts',
        templateFile: 'templates/component/styles.ts.hbs'
      }
    ]
  }),
    plop.setGenerator('template', {
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'template name?'
        }
      ],
      actions: [
        {
          type: 'add',
          path: '../src/templates/{{pascalCase  name}}/{{pascalCase  name}}.tsx',
          templateFile: 'templates/template/index.tsx.hbs'
        },
        {
          type: 'add',
          path: '../src/templates/{{pascalCase  name}}/{{pascalCase  name}}.stories.tsx',
          templateFile: 'templates/template/stories.tsx.hbs'
        },
        {
          type: 'add',
          path: '../src/templates/{{pascalCase  name}}/{{pascalCase  name}}.styles.ts',
          templateFile: 'templates/template/styles.ts.hbs'
        }
      ]
    }),
    plop.setGenerator('page', {
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'page name?'
        }
      ],
      actions: [
        {
          type: 'add',
          path: '../src/pages/{{dashCase name}}/index.tsx',
          templateFile: 'templates/page/index.tsx.hbs'
        },
        {
          type: 'add',
          path: '../src/pages/{{dashCase name}}/{{pascalCase  name}}.stories.tsx',
          templateFile: 'templates/page/stories.tsx.hbs'
        },
        {
          type: 'add',
          path: '../src/pages/{{dashCase name}}/{{pascalCase  name}}.styles.ts',
          templateFile: 'templates/page/styles.ts.hbs'
        }
      ]
    })
}
