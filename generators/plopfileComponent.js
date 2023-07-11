module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'application component',

    // inquirer prompts
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
  })
}
