module.exports = function (plop) {
  plop.setGenerator('Component', {
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name?'
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
    plop.setGenerator('Template', {
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'Template name?'
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
    plop.setGenerator('Page', {
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'Page name?'
        },
        {
          type: 'list',
          message: 'Choose a template:',
          name: 'template',
          choices: [
            { value: 'Default' },
            { value: 'Account' },
            { value: 'Auth' }
          ]
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
          path: '../src/pages/{{dashCase name}}/{{dashCase  name}}.stories.tsx',
          templateFile: 'templates/page/stories.tsx.hbs'
        },
        {
          type: 'add',
          path: '../src/pages/{{dashCase name}}/{{dashCase  name}}.styles.ts',
          templateFile: 'templates/page/styles.ts.hbs'
        }
      ]
    })
}
