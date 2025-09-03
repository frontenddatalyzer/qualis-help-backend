module.exports = {
  apps: [
    {
      name: 'qualis-help',
      cwd: 'D:/Workspace/qualis-help-doc/backend',
      script: 'npm',
      args: 'run start',
      interpreter: 'cmd.exe',
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
};