# qunit_autotest
An auto test framework based on QunitJS. Provide real-time test manipulation and analyst.
Developed by Hisense Co. Shenzhen Research Center. Private owned.

### V 1.0
1. 实现了测试框架的搭建，采用MVVM架构。包括显示层，测试逻辑实现，对接model APIs。
2. 用户友好的显示层，具有有设计感的前端效果。
3. 包含所有ATSC接口测试用例。

### V 1.1
1. 加入显示控制层，引入了Vue.js来渲染显示层。
2. 模块化拆分测试用例，调整了结构：stress test、scan、play、SL、PC、infobar和PVR。
3. 移植性：一个config文件，控制显示和自动生成Menu。
4. 移植性：一套UI，通过修改config文件进行不同产品Model JS的加载。
5. 改写model.js脚本引入方式。
6. 引入了一些DVB测试用例，进一步优化ATSC测试用例。
7. 测试代码架构的调整，方便后续扩充和维护.


适配平台版本号：更新至ATSC-H0307，DVB-H0309

### V 1.2
1. 采用VUE Component方法，设计并实现了动态测试用例队列和动态参数输入域。
2. 为动态测试用例队列设计翻页逻辑（pagination）。为输入域重新定义config文件，加入了输入属性。
3. 进一步去耦合，并优化了库依赖。
4. 进一步丰富DVB测试用例。包括接口测试和压力测试。
5. 更新DVB的model JS接口至2017-03-15版本。
6. Update on 2017-03-30：更新model JS接口这2017-03-27版本。DVB压测用例更新。修复了一个BUG。

适配平台版本号： ATSC-H0327，DVB-H0329