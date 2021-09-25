// 导入组件，组件必须声明 name
import SogCalendar from "./src/main";

// 为组件添加 install 方法，用于按需引入
SogCalendar.install = function (Vue) {
  Vue.component(SogCalendar.name, SogCalendar);
};

export default SogCalendar;
