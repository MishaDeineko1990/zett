/**
 * File generated at  2019-01-07 02:26:13 PST 
 * Client: Shutterstock (10005809)
 */
define("Automatons/automatons/2001", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2001,
    type: "automatons",
    attributes: {
      name: "Shutterstock Post Chat Survey",
      type: "satisfactionSurvey",
      description: "CMRASI-2133",
      initialNode: "node::2001",
      style: "style::2003"
    }
  };
});
define("Automatons/nodes/2001", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2001,
    type: "nodes",
    attributes: {
      name: "Shutterstock Post Chat Survey",
      type: "survey",
      formify: {
        fields: [{
          id: "representative-knowledge",
          type: "radio",
          label: "*1. On a scale of 1 -5, how knowledgeable did you find the representative that you worked with to be",
          options: ["(5) Extremely knowledgeable", "(4) Very knowledgeable", "(3) Somewhat knowledgeable", "(2) Not very knowledgeable", "(1) Not at all knowledgeable"],
          required: true,
          requiredError: "This is a required field"
        }, {
          id: "representative-helpful",
          type: "radio",
          label: "*2. On a scale of 1-5, how helpful did you find the representative that you worked with to be?",
          options: ["(5) Extremely helpful", "(4) Very helpful", "(3) Somewhat helpful", "(2) Not very helpful", "(1) Unhelpful"],
          required: true,
          requiredError: "This is a required field"
        }, {
          id: "representative-pleasant",
          type: "radio",
          label: "*3. On a scale of 1 - 5, how pleasant did you find the representative that you worked with to be",
          options: ["(5) Extremely pleasant", "(4) Very pleasant", "(3) Somewhat pleasant", "(2) Not very pleasant", "(1) Unpleasant"],
          required: true,
          requiredError: "This is a required field"
        }, {
          id: "representative-resolution",
          type: "radio",
          label: "*4. Was your question answered or issue resolved?",
          options: ["Yes, and I'm satisfied with the answer or resolution", "Yes, but I'm not satisfied with the answer or resolution", "No"],
          required: true,
          requiredError: "This is a required field"
        }, {
          id: "feedback",
          type: "textarea",
          label: "*5. We are always striving to do better so if you have any suggestions on how we could improve your Customer Service experience, please share them below.",
          placeholder: "Type here...",
          required: true,
          requiredError: "This is a required field"
        }],
        heading: "Thanks for chatting with us today.",
        next: "Submit",
        subheading: "If you have a moment we would love to have your feedback on the experience."
      },
      surveyAlerts: [{
        name: "Shutterstock-Survey-Alerts",
        conditions: {
          or: ["representative-knowledge equals (2) Not very knowledgeable", "representative-knowledge equals (1) Not at all knowledgeable"]
        },
        emailSpecName: "Shutterstock-Survey-Alerts",
        emailSubject: "Shutterstock Survey Alerts",
        emailTemplate: 2003
      }],
      template: "template::2001",
      transitions: {
        Submit: {
          target: "node::2002"
        }
      }
    }
  };
});
define("Automatons/nodes/2002", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2002,
    type: "nodes",
    attributes: {
      name: "Shutterstock Post Chat Survey Thank You",
      type: "thankyou",
      isOutcomeNode: 1,
      template: "template::2002"
    }
  };
});
define('Automatons/styles/2003', ['exports', 'module'], function (exports, module) {
  'use strict';

  module.exports = '#viewport {    /* base formify styles */}#viewport html,#viewport body,#viewport div,#viewport span,#viewport applet,#viewport object,#viewport iframe,#viewport h1,#viewport h2,#viewport h3,#viewport h4,#viewport h5,#viewport h6,#viewport p,#viewport blockquote,#viewport pre,#viewport a,#viewport abbr,#viewport acronym,#viewport address,#viewport big,#viewport cite,#viewport code,#viewport del,#viewport dfn,#viewport em,#viewport img,#viewport ins,#viewport kbd,#viewport q,#viewport s,#viewport samp,#viewport small,#viewport strike,#viewport strong,#viewport sub,#viewport sup,#viewport tt,#viewport var,#viewport b,#viewport u,#viewport i,#viewport center,#viewport dl,#viewport dt,#viewport dd,#viewport ol,#viewport ul,#viewport li,#viewport fieldset,#viewport form,#viewport label,#viewport legend,#viewport table,#viewport caption,#viewport tbody,#viewport tfoot,#viewport thead,#viewport tr,#viewport th,#viewport td,#viewport article,#viewport aside,#viewport canvas,#viewport details,#viewport embed,#viewport figure,#viewport figcaption,#viewport footer,#viewport header,#viewport hgroup,#viewport menu,#viewport nav,#viewport output,#viewport ruby,#viewport section,#viewport summary,#viewport time,#viewport mark,#viewport audio,#viewport video {  margin: 0;  padding: 0;  border: 0;  font-size: 100%;  font: inherit;  vertical-align: baseline;}#viewport article,#viewport aside,#viewport details,#viewport figcaption,#viewport figure,#viewport footer,#viewport header,#viewport hgroup,#viewport menu,#viewport nav,#viewport section {  display: block;}#viewport body {  line-height: 1;}#viewport ol,#viewport ul {  list-style: none;}#viewport blockquote,#viewport q {  quotes: none;}#viewport blockquote:before,#viewport blockquote:after,#viewport q:before,#viewport q:after {  content: "";  content: none;}#viewport table {  border-collapse: collapse;  border-spacing: 0;}#viewport .formify-form-body {  display: block;  margin-bottom: 1em;}#viewport .formify-heading {  font-weight: bold;  margin-bottom: 1em;  font-size: 1.125em;  line-height: 1.4em;}#viewport .formify-header {  display: block;  height: auto;  margin-bottom: 1em;}#viewport .formify-fieldset-radio .formify-label,#viewport .formify-fieldset-checkbox .formify-label {  display: block;  float: left;  clear: left;  margin: 0.5em 0;  vertical-align: middle;}#viewport .formify-fieldset-radio .formify-label .formify-input,#viewport .formify-fieldset-checkbox .formify-label .formify-input,#viewport .formify-fieldset-radio .formify-label span,#viewport .formify-fieldset-checkbox .formify-label span {  display: inline-block;  vertical-align: middle;}#viewport .formify-fieldset-radio .formify-label span,#viewport .formify-fieldset-checkbox .formify-label span {  margin-left: 0.125em;}#viewport .formify-fieldset-inline .formify-label {  clear: none;  margin: 0.5em 1.5em 0.5em 0;}#viewport .formify-legend {  float: left;  width: 100%;  margin-bottom: 1em;}#viewport .formify-scale-statement .formify-legend {  margin-bottom: 0;  padding: 0.25em 0;}#viewport .formify-label,#viewport .formify-legend {  font-weight: normal;  font-size: 1em;  line-height: 1.4em;}#viewport .formify-fieldset-email .formify-input,#viewport .formify-fieldset-select .formify-input,#viewport .formify-fieldset-text .formify-input,#viewport .formify-fieldset-textarea .formify-input {  margin-top: 0.5em;  clear: left;  background-color: white;  border: 1px solid #aaa;  display: block;  border-radius: 3px;  padding: 0.25em;  width: 100%;}@media only screen and (min-width: 320px) {  #viewport .formify-input {    max-width: 240px;  }}#viewport .formify-fieldset-textarea .formify-input {  width: 100%;  max-width: 100%;  height: 180px;}#viewport .formify-fieldset-radio .formify-input,#viewport .formify-fieldset-checkbox .formify-input,#viewport .formify-fieldset-radio .formify-label,#viewport .formify-fieldset-checkbox .formify-label,#viewport .formify-scale-input,#viewport .formify-scale-option,#viewport .formify-select .formify-input,#viewport .formify-submit {  cursor: pointer;}#viewport .formify-submit {  display: block;  width: 100%;  padding: 1em;  border-radius: 3px;  background: #666;  color: #fff;  margin-left: auto;  margin-right: auto;}#viewport .formify-submit:focus {  outline-offset: -4px;  outline: 1px dotted #000;}#viewport .formify-group {  display: block;  position: static;  border-top: 1px solid #ccc;  padding: 10px 0;  margin: 0;}#viewport .formify-group [class*="formify-fieldset"] {  border-top: 0;}#viewport [class*="formify-fieldset"] {  padding: 10px 0;  margin: 0;  position: relative;  border-top: 1px solid #ccc;}#viewport .formify-scale-row.formify-scale-header {  display: none;}#viewport .formify-scale-cell {  font-weight: normal;  display: block;  margin: 1em 0;  font-size: 1em;}#viewport .formify-scale-option span {  display: inline-block;  vertical-align: middle;}#viewport .formify-scale-input {  display: inline-block;  vertical-align: middle;}@media only screen and (min-width: 320px) {  #viewport .formify-scale-body {    margin-top: 1em;  }  #viewport .formify-scale-row {    margin-top: 0.5em;    display: table;    width: 100%;    border-collapse: collapse;  }  #viewport .formify-scale-row.formify-scale-header {    display: table;    margin-top: 1em;  }  #viewport .formify-scale-cell {    display: table-cell;    width: auto;    float: none;    text-align: center;    vertical-align: middle;  }  #viewport .formify-scale-statement {    display: table-cell;    width: 50%;    text-align: left;  }  #viewport .formify-scale-option span {    display: none;  }}#viewport #view-container {  font-size: 12px;  color: #333333;  font-family: Frank, Arial, Helvetica, sans-serif;  box-sizing: border-box;  height: 100%;  padding: 20px;}#viewport #view-container h1,#viewport #view-container h2 {  color: #333333;  font-family: inherit;}#viewport #view-container fieldset {  padding: 20px 0 !important;  margin: 0;  position: relative;}#viewport #view-container .formify-heading {  color: #333333;  font-family: inherit;  font-size: 18px;  margin: 10px 0px;}#viewport #view-container .formify-heading-required {  color: #b22520;  font-family: inherit;  font-size: 12px;  margin: 10px 0px 30px 0px;}#viewport #view-container p[acif-invalid="required"] {  position: absolute;  top: 0px;  color: #b22520;  font-size: 12px;}#viewport #view-container .formify-label span {  display: inline;}#viewport #view-container .formify-label,#viewport #view-container .formify-legend {  font-weight: normal;  font-size: 1.3em;  line-height: 1.4em;}#viewport #view-container .formify-input {  clear: left;  background-color: white;  border: 1px solid #aaa !important;  border-radius: 3px;  width: auto;}#viewport #view-container .formify-footer {  margin: 20px 0px;}#viewport #view-container .formify-submit {  width: auto;  padding: 0.7em 1em;  border-radius: 3px;  background: #333333;  font-weight: bold;  font-size: 16px;  color: #fff;  margin: 0 auto;}#viewport #view-container .formify-submit:focus {  outline-offset: -4px;  outline: 1px dotted #333333;}#viewport #view-container textarea.formify-input {  height: 120px;  width: 94%;  padding: 10px;}#viewport #view-container .wrapper {  justify-content: center;  margin: 0 auto;  margin-top: 60px;}#viewport #view-container .wrapper .message-wrapper {  text-align: center;}#viewport #view-container .wrapper .message-wrapper h1,#viewport #view-container .wrapper .message-wrapper p {  margin-bottom: 20px;}#viewport #view-container .wrapper .message-wrapper .thankyou-heading {  font-size: 18px;}#viewport #view-container .wrapper .close-button {  width: auto;  padding: 0.7em 1em;  border-radius: 3px;  background: #333333;  font-weight: bold;  font-size: 16px;  color: #fff;  margin: 0 auto;}#viewport #view-container .wrapper .close-button:focus {  outline-offset: -4px;  outline: 1px dotted #333333;}';
});
define("Automatons/templates/2001", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div acif-template=\"formify\"></div>";
});
define("Automatons/templates/2002", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"thankyou\">  <div class=\"wrapper\">    <div class=\"message-wrapper\">      <p class=\"thankyou-heading\">Thank you for taking the time to fill out the survey!</p>      <button class=\"close-button\" acif-action=\"exit\">Close</button>    </div>  </div></div>";
});
define("Automatons/templates/2003", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<p>This is an auto-generated email to inform you about an unsatisfactory experience. Please click on the following link to view the survey:<br>  <a href=\"https://portal.touchcommerce.com/portal/portal.jsp#transcript_10006103_engagementID:[engagement-id]:transcript\">https://portal.touchcommerce.com/portal/portal.jsp#transcript_10006103_engagementID:[engagement-id]:transcript</a></p><p>Relationship Manager ID: [agent-id]</p><p>ChatID: [engagement-id]</p>";
});
define("Automatons/templates/formify-map", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {};
});
ACIF.onConfigsReady.resolve();
//# sourceMappingURL=acif-configs.map
