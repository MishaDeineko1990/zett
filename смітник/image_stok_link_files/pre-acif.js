/*
 * Run this script in the acif IFrame window context, before calling acif.js
*/
window.inQ = parent.inQ;
window.inQ.frame = window;
window.inqFrame = parent.inqFrame;
window.Inq = parent.Inq;
