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
          path: '../src/pages/{{camelCase  name}}.tsx',
          templateFile: 'templates/template/page.tsx.hbs'
        },
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
    })
}
