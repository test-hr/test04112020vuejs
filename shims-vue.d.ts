declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

declare module '*.json';

declare module '*.svg' {
  const content: any;
  export default content;
}


declare module 'vue-resize-sensor' {
  import resizeSensor from 'vue-resize-sensor';
}
declare module 'vue-avatar-component' {
  import Avatar from 'vue-avatar-component';
}
