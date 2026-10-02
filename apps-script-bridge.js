/**
 * GitHub Pages entry point.
 * Makes google.script.run work outside Apps Script by calling your web app's doPost.
 */
const APPS_SCRIPT_URL = 'PASTE_YOUR_WEB_APP_/exec_URL_HERE';

(function () {
  // Already running inside Apps Script? Do nothing.
  if (window.google && window.google.script && window.google.script.run) return;

  function runner(ok, fail) {
    return new Proxy({}, {
      get: function (_, name) {
        if (name === 'withSuccessHandler') return function (f) { return runner(f, fail); };
        if (name === 'withFailureHandler') return function (f) { return runner(ok, f); };
        if (typeof name !== 'string' || name === 'then') return undefined;
        return function () {
          const args = Array.prototype.slice.call(arguments);
          fetch(APPS_SCRIPT_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },  // avoids CORS preflight
            body: JSON.stringify({ fn: name, args: args })
          })
            .then(function (r) { return r.text(); })
            .then(function (t) {
              let j;
              try { j = JSON.parse(t); }
              catch (e) { throw new Error('Server did not return JSON. Check the /exec URL and that the deployment is a NEW VERSION with access "Anyone". Got: ' + t.slice(0, 120)); }
              if (j.error) throw new Error(j.error);
              if (!('result' in j)) throw new Error('Unexpected reply from server (' + name + '): ' + t.slice(0, 150));
              if (ok) ok(j.result);
            })
            .catch(function (e) {
              if (fail) fail(e); else console.error(e);
            });
        };
      }
    });
  }

  window.google = { script: { run: runner() } };
})();
