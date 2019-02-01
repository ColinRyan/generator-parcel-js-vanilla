var Generator = require('yeoman-generator')

module.exports = class extends Generator {
  // The name `constructor` is important here
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);

  }

  
  async prompting() {
    this.answers = await this.prompt([{
      type    : 'input',
      name    : 'name',
      message : 'Your project name',
      default : this.appname // Default to current folder name
    }, {
      type    : 'input',
      name    : 'description',
      message : 'Your project description'
    },
    {
      type    : 'confirm',
      name    : 'private',
      message : 'Is your project private?'
    }]);


  }
  paths() {
      this.fs.copyTpl(
          this.templatePath(),
          this.destinationPath(),
          {
              name : this.answers.name,
              description : this.answers.description,
              private: this.answers.private,
                            
          }
      )
  }
  
  installingDependencies() {
    // this.log("Installing dependencies")
    this.yarnInstall(['parcel'], { 'dev': true });
  }
}
