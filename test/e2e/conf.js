exports.config = {
  framework: 'mocha',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  suites: {
    localization: 'views/localization/*.js',
    full: 'views/*.js'
  },
  // The timeout in milliseconds for each script run on the browser. This should
  // be longer than the maximum time your application needs to stabilize between
  // tasks.
  allScriptsTimeout: 11000,

  // How long to wait for a page to load.
  getPageTimeout: 10000,
  capabilities: {
    browserName: 'firefox',
    // If this is set to be true, specs will be sharded by file (i.e. all
    // files to be run by this set of capabilities will run in parallel).
    // Default is false.
    shardTestFiles: false,
    maxInstances: 40
  },
  mochaOpts: {
  reporter: "spec",
  slow: 3000,
  enableTimeouts: false,
  grep:  '#P2'
  },
  onPrepare: function(){
      browser.ignoreSynchronization = true;
      }
};