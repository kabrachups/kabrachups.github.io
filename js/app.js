(function(t){function a(a){for(var s,e,c=a[0],o=a[1],l=a[2],d=0,v=[];d<c.length;d++)e=c[d],Object.prototype.hasOwnProperty.call(n,e)&&n[e]&&v.push(n[e][0]),n[e]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);b&&b(a);while(v.length)v.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var t,a=0;a<i.length;a++){for(var r=i[a],s=!0,c=1;c<r.length;c++){var o=r[c];0!==n[o]&&(s=!1)}s&&(i.splice(a--,1),t=e(e.s=r[0]))}return t}var s={},n={app:0},i=[];function e(a){if(s[a])return s[a].exports;var r=s[a]={i:a,l:!1,exports:{}};return t[a].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=t,e.c=s,e.d=function(t,a,r){e.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:r})},e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,a){if(1&a&&(t=e(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)e.d(r,s,function(a){return t[a]}.bind(null,s));return r},e.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},e.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=a,c=c.slice();for(var l=0;l<c.length;l++)a(c[l]);var b=o;i.push([0,"chunk-vendors"]),r()})({0:function(t,a,r){t.exports=r("56d7")},"56d7":function(t,a,r){"use strict";r.r(a);r("e260"),r("e6cf"),r("cca6"),r("a79d");var s=r("2b0e"),n=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{attrs:{id:"app"}},[r(t.layout,{tag:"component"},[r("router-view")],1)],1)},i=[],e=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",[r("b-container",{attrs:{fluid:""}},[r("b-navbar",{attrs:{variant:"white",sticky:"",toggleable:"lg"}},[r("b-navbar-brand",{attrs:{href:"/"}},[r("img",{staticClass:"d-inline-block align-center",staticStyle:{"max-width":"75px"},attrs:{src:"https://storage.googleapis.com/intaila/presentation/img/logo_large3.png",alt:" программа для аптек"}}),t._v(" Интайла ")]),r("b-navbar-toggle",{attrs:{target:"nav-text-collapse"}}),r("b-collapse",{attrs:{id:"nav-text-collapse","is-nav":""}},[r("b-navbar-nav",[r("b-nav-item",{attrs:{to:{name:"Home"}}},[r("b-icon",{attrs:{icon:"cloud",animation:"fade","font-scale":"1"}}),t._v(" Облачная программа для аптек ")],1),r("b-nav-item",{attrs:{to:{name:"Modules"}}},[r("b-icon",{attrs:{icon:"diagram3",animation:"fade","font-scale":"1"}}),t._v(" Модули ")],1),r("b-nav-item",{attrs:{to:{name:"Media"}}},[r("b-icon",{attrs:{icon:"camera-video",animation:"fade","font-scale":"1"}}),t._v(" Видео и скриншоты ")],1),r("b-nav-item",{attrs:{to:{name:"Partnership"}}},[r("b-icon",{attrs:{icon:"people",animation:"fade","font-scale":"1"}}),t._v(" Сотрудничество ")],1),r("b-nav-item",{attrs:{to:{name:"Contact"}}},[r("b-icon",{attrs:{icon:"telephone",animation:"fade","font-scale":"1"}}),t._v(" Связаться ")],1)],1)],1)],1),r("b-jumbotron",{attrs:{lead:"Облачная программа для аптек"},scopedSlots:t._u([{key:"header",fn:function(){return[r("b-img",{staticClass:"d-inline-block align-center",staticStyle:{"max-width":"200px"},attrs:{src:"https://storage.googleapis.com/intaila/presentation/img/logo_large3.png",alt:"программа для аптек"}}),t._v(" Интайла ")]},proxy:!0}])}),r("transition",{attrs:{name:"fade",mode:"out-in"}},[r("router-view")],1)],1)],1)},c=[],o={data:function(){return{}},methods:{},computed:{}},l=o,b=r("2877"),d=Object(b["a"])(l,e,c,!1,null,null,null),v=d.exports,u={components:{MainLayout:v},computed:{layout:function(){return this.$route.meta.layout}}},m=u,p=(r("5c0b"),Object(b["a"])(m,n,i,!1,null,null,null)),f=p.exports,g=r("5f5b"),_=r("b1e0"),h=(r("f9e3"),r("2dd8"),r("a4d3"),r("e01a"),r("7db0"),r("fb6a"),r("b0c0"),r("8c4f")),y=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"about"},[r("b-card-group",{staticClass:"mt-3",attrs:{deck:""}},[r("b-card",{attrs:{"bg-variant":"light",title:"Быстро развивайте аптечную сеть"}},[r("b-card-img",{attrs:{src:"https://storage.googleapis.com/intaila/presentation/img/laptop.jpg",alt:"программа для аптек"}}),r("b-card-text",[r("br"),t._v(" Открытие новой аптеки занимает "),r("b",[t._v("5 минут")]),r("br"),r("b-icon",{attrs:{icon:"cloud-upload",animation:"fade","font-scale":"1",variant:"success"}}),r("br"),t._v(" Подключение уже работающей аптеки занимает "),r("b",[t._v("1 день")]),r("br"),r("b-icon",{attrs:{icon:"cloud-upload",animation:"fade","font-scale":"1",variant:"success"}}),r("br"),t._v(" Открытие и переход обеспечивается нашими специалистами ")],1)],1),r("b-card",{attrs:{"bg-variant":"light",title:"Эффективно управляйте сотнями аптек"}},[r("b-card-img",{attrs:{src:"https://storage.googleapis.com/intaila/presentation/img/laptop2.jpg",alt:"программа для аптек"}}),r("b-card-text",[r("br"),t._v(" Количество аптек в Вашей сети "),r("b",[t._v("неограниченно")]),r("br"),r("b-icon",{attrs:{icon:"diagram3",animation:"fade","font-scale":"1",variant:"primary"}}),r("br"),t._v(" Расстояние до аптек "),r("b",[t._v("не имеет значения")]),r("br"),r("b-icon",{attrs:{icon:"diagram3",animation:"fade","font-scale":"1",variant:"primary"}}),r("br"),t._v(" Все Ваши управленческие решения внедряются во всех аптеках "),r("b",[t._v("моментально")])],1)],1),r("b-card",{attrs:{"bg-variant":"light",title:"Сэкономьте на оборудовании"}},[r("b-card-img",{attrs:{src:"https://storage.googleapis.com/intaila/presentation/img/laptop3.jpg",alt:"программа для аптек"}}),r("b-card-text",[r("br"),t._v(" Вам "),r("b",[t._v("не придется")]),t._v(" покупать дорогое серверное оборудование "),r("br"),r("b-icon",{attrs:{icon:"laptop",animation:"fade","font-scale":"1",variant:"success"}}),r("br"),t._v(" Для работы необходимы только самые "),r("b",[t._v("обычные")]),t._v(" компьютеры персонала "),r("br"),r("b-icon",{attrs:{icon:"laptop",animation:"fade","font-scale":"1",variant:"success"}}),r("br"),t._v(" Вы "),r("b",[t._v("не будете")]),t._v(" оплачивать дорогих программистов ")],1)],1)],1),r("b-card-group",{staticClass:"mt-3",attrs:{deck:""}},[r("b-card",{attrs:{"bg-variant":"light",title:"Сделайте фармацевтов профессионалами"}},[t._v(" Элемент скриншота из модуля касса: "),r("b-card-img",{attrs:{src:"https://storage.googleapis.com/intaila/presentation/img/pos.png",alt:"программа для аптек"}}),r("b-card-text",[r("br"),t._v(" На кассе сразу отображаются аналоги для "),r("b",[t._v("замены")]),r("br"),r("b-icon",{attrs:{icon:"person-check",animation:"fade","font-scale":"1",variant:"primary"}}),r("br"),t._v(" Программа автоматически предлагает увеличить чек за счет "),r("b",[t._v("допродажи")]),t._v(" с прописанным обоснованием "),r("br"),r("b-icon",{attrs:{icon:"person-check",animation:"fade","font-scale":"1",variant:"primary"}}),r("br"),t._v(" Система допродаж позволяет "),r("b",[t._v("увеличить")]),t._v(" чек с 1 до 3 позиций ")],1)],1),r("b-card",{attrs:{"bg-variant":"light",title:"Передавайте управление талантам"}},[r("b-card-img",{attrs:{src:"https://storage.googleapis.com/intaila/presentation/img/team.jpg",alt:"программа для аптек"}}),r("b-card-text",[r("br"),t._v(" Один Ваш менеджер может "),r("b",[t._v("удаленно")]),t._v(" управлять любым количеством аптек "),r("br"),r("b-icon",{attrs:{icon:"person-plus",animation:"fade","font-scale":"1",variant:"success"}}),r("br"),t._v(" Аптеки можно разделять на "),r("b",[t._v("категории")]),t._v(". "),r("br"),r("b-icon",{attrs:{icon:"person-plus",animation:"fade","font-scale":"1",variant:"success"}}),r("br"),t._v(" За категорией аптек можно "),r("b",[t._v("закреплять")]),t._v(" одного или нескольких ответственных ")],1)],1),r("b-card",{attrs:{"bg-variant":"light",title:"Введите личную ответственность"}},[t._v(" Элемент скриншота из модуля остатки: "),r("b-card-img",{attrs:{src:"https://storage.googleapis.com/intaila/presentation/img/history.png",alt:"программа для аптек"}}),r("b-card-text",[r("br"),t._v(" Вход в программу только под "),r("b",[t._v("личным")]),t._v(" логином и паролем "),r("br"),r("b-icon",{attrs:{icon:"key",animation:"fade","font-scale":"1",variant:"success"}}),r("br"),r("b",[t._v("Каждая")]),t._v(" упаковка в Вашей аптеке хранит информацию о том, кто и почему ее заказал, кто и когда принял "),r("br"),r("b-icon",{attrs:{icon:"key",animation:"fade","font-scale":"1",variant:"success"}}),r("br"),t._v(" Ваши фармацевты имеют доступ "),r("b",[t._v("только")]),t._v(" к кассе, а менеджмент сети только к "),r("b",[t._v("нужным")]),t._v(" модулям ")],1)],1)],1),r("b-card-group",{staticClass:"mt-3",attrs:{deck:""}},[r("b-card",{attrs:{"bg-variant":"light",title:"Введите свою систему наценок и скидок"}},[r("b-card-img",{attrs:{src:"https://storage.googleapis.com/intaila/presentation/img/pharnacy.jpg",alt:"программа для аптек"}}),r("b-card-text",[r("br"),t._v(" Каждая "),r("b",[t._v("ценовая категория")]),t._v(" продуктов имеет свою наценку "),r("br"),r("b-icon",{attrs:{icon:"gift",animation:"fade","font-scale":"1",variant:"success"}}),r("br"),t._v(" Даже отдельный продукт может иметь "),r("b",[t._v("собственную систему ценообразования")]),r("br"),r("b-icon",{attrs:{icon:"gift",animation:"fade","font-scale":"1",variant:"success"}}),r("br"),r("b",[t._v("Система скидок")]),t._v(" для лояльных покупателей и для резервирования через Интернет ")],1)],1),r("b-card",{attrs:{"bg-variant":"light",title:"Зарабывайте на контрактах с производителями"}},[r("b-card-img",{attrs:{src:"https://storage.googleapis.com/intaila/presentation/img/manufacturer.png",alt:"программа для аптек"}}),r("b-card-text",[r("br"),t._v(" Все маркетинговые контракты (приоритеты и блоки) заносятся в программу и "),r("b",[t._v("учитываются в заказе")]),r("br"),r("b-icon",{attrs:{icon:"building",animation:"fade","font-scale":"1",variant:"primary"}}),r("br"),t._v(" Фармацевты "),r("b",[t._v("видят на кассе")]),t._v(" продукты, которые находятся в маркетинговых контрактах "),r("br"),r("b-icon",{attrs:{icon:"building",animation:"fade","font-scale":"1",variant:"primary"}}),r("br"),t._v(" Прибыль по маркетинговых контрактам "),r("b",[t._v("автоматически рассчитывается")]),t._v(" и отображается онлайн в инфографике. ")],1)],1),r("b-card",{attrs:{"bg-variant":"light",title:"Проводите акции для покупателей"}},[r("b-card-img",{attrs:{src:"https://storage.googleapis.com/intaila/presentation/img/customer.jpg",alt:"программа для аптек"}}),r("b-card-text",[r("br"),r("b",[t._v("Запускайте акции")]),t._v(" для покупателей по дням, по часам или “по понедельникам с 1 до 31 декабря с 10 до 12 утра” "),r("br"),r("b-icon",{attrs:{icon:"clock",animation:"fade","font-scale":"1",variant:"warning"}}),r("br"),t._v(" Лояльные покупатели смогут получить у Вас "),r("b",[t._v("специальные скидки")]),t._v(" на отдельные группы товаров - на сахароснижающие средства, на антиагреганты и т.п. "),r("br"),r("b-icon",{attrs:{icon:"clock",animation:"fade","font-scale":"1",variant:"warning"}}),r("br"),t._v(" Акции и скидки включаются моментально на выбранных аптеках ")],1)],1)],1),r("b-card-group",{staticClass:"mt-3",attrs:{deck:""}},[r("b-card",{attrs:{"bg-variant":"light",title:"Используйте уникальную базу продуктов"}},[t._v(" Cкриншот из программы: "),r("b-card-img",{attrs:{src:"https://storage.googleapis.com/intaila/presentation/img/product.png",alt:"программа для аптек"}}),r("b-card-text",[r("br"),t._v(" В базе продуктов программы для аптек Интайла более "),r("b",[t._v("30 тысяч продуктов")]),r("br"),r("b-icon",{attrs:{icon:"box",animation:"fade","font-scale":"1",variant:"primary"}}),r("br"),t._v(" В продуктах прописаны изображения, составы, аналоги и внедрена система допродаж "),r("br"),r("b-icon",{attrs:{icon:"box",animation:"fade","font-scale":"1",variant:"primary"}}),r("br"),t._v(" База "),r("b",[t._v("бесплатно")]),t._v(" поддерживается нашими специалистами. ")],1)],1),r("b-card",{attrs:{"bg-variant":"light",title:"Упростите работу бухгалтерии"}},[r("b-card-img",{attrs:{src:"https://storage.googleapis.com/intaila/presentation/img/accounting.jpg",alt:"программа для аптек"}}),r("b-card-text",[r("br"),t._v(" Настройка всех популярных в Украине "),r("b",[t._v("фискальных принтеров")]),r("br"),r("b-icon",{attrs:{icon:"file-earmark-check",animation:"fade","font-scale":"1",variant:"info"}}),r("br"),t._v(" Настраеваемый обмен данными с "),r("b",[t._v("1С")]),r("br"),r("b-icon",{attrs:{icon:"file-earmark-check",animation:"fade","font-scale":"1",variant:"info"}}),r("br"),t._v(" Выгрузка налоговых накладных в "),r("b",[t._v("Медок")])],1)],1),r("b-card",{attrs:{"bg-variant":"light",title:"Анализируйте бизнес онлайн"}},[t._v(" Cкриншот из программы: "),r("b-card-img",{attrs:{src:"https://storage.googleapis.com/intaila/presentation/img/analytics.png",alt:"программа для аптек"}}),r("b-card-text",[r("br"),t._v(" Даже проданный секунду назад товар отображается у Вас "),r("b",[t._v("в инфографике")]),r("br"),r("b-icon",{attrs:{icon:"search",animation:"fade","font-scale":"1",variant:"primary"}}),r("br"),t._v(" За мгновения Вы смотрите закупки и продажи аптек состоянием на текущий момент "),r("br"),r("b-icon",{attrs:{icon:"search",animation:"fade","font-scale":"1",variant:"primary"}}),r("br"),t._v(" Вы видите продажи и закупки отдельных продуктов и категорий отдельных поставщиков за любой период ")],1)],1)],1),r("b-card-group",{staticClass:"mt-3",attrs:{deck:""}},[r("b-card",{attrs:{"bg-variant":"light",title:"Зарабатывайте на собственном онлайн-магазине"}},[t._v(" Cкриншот онлайн магазина: "),r("b-card-img",{attrs:{src:"https://storage.googleapis.com/intaila/presentation/img/shop.png",alt:"программа для аптек"}}),r("b-card-text",[r("br"),t._v(" Все аптечные сети получают бесплатный доступ к "),r("b",[t._v("собственному онлайн-магазину")]),r("br"),r("b-icon",{attrs:{icon:"cart",animation:"fade","font-scale":"1",variant:"danger"}}),r("br"),t._v(" Покупатели могут "),r("b",[t._v("резервировать")]),t._v(" товар в наличии "),r("br"),r("b-icon",{attrs:{icon:"cart",animation:"fade","font-scale":"1",variant:"danger"}}),r("br"),t._v(" Или "),r("b",[t._v("заказать доставку")]),t._v(" в Ваши аптеки с дистрибьютора ")],1)],1),r("b-card",{attrs:{"bg-variant":"light",title:"Получайте обновления бесплатно"}},[r("b-card-img",{attrs:{src:"https://storage.googleapis.com/intaila/presentation/img/release.jpg",alt:"программа для аптек"}}),r("b-card-text",[r("br"),t._v(" В программе для аптек Интайла "),r("b",[t._v("все обновления")]),t._v(" Вы получаете бесплатно "),r("br"),r("b-icon",{attrs:{icon:"cloud-upload",animation:"fade","font-scale":"1",variant:"primary"}}),r("br"),t._v(" Все рациональные предложения также дорабатываются "),r("b",[t._v("бесплатно")]),r("br"),r("b-icon",{attrs:{icon:"cloud-upload",animation:"fade","font-scale":"1",variant:"primary"}}),r("br"),t._v(" Постоянная "),r("b",[t._v("поддержка и обучение")]),t._v(" персонала при запуске программы ")],1)],1),r("b-card",{attrs:{"bg-variant":"light",title:"Стоимость программы с окупается первых дней"}},[r("b-card-img",{attrs:{src:"https://storage.googleapis.com/intaila/presentation/img/pharmacy.jpg",alt:"программа для аптек"}}),r("b-card-text",[r("br"),t._v(" Подключение "),r("b",[t._v("бесплатно")]),t._v(", первый месяц работы - "),r("b",[t._v("бесплатно")]),r("br"),r("b-icon",{attrs:{icon:"cloud-plus-fill",animation:"fade","font-scale":"1",variant:"success"}}),r("br"),t._v(" Стоимость программы для 1 аптеки в месяц составляет "),r("b",[t._v("1500 гривен")]),t._v(", которые сразу же окупаются "),r("br"),r("b-icon",{attrs:{icon:"cloud-plus-fill",animation:"fade","font-scale":"1",variant:"success"}}),r("br"),t._v(" Модули менеджеров (закупки, маркетинг, ценообразования и т.д.) и модуль аналитики - "),r("b",[t._v("бесплатны")]),t._v(". ")],1)],1)],1)],1)},x=[],C=(r("cccb"),{}),k=Object(b["a"])(C,y,x,!1,null,null,null),w=k.exports,S=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"mb-3"},[r("b-card-group",{staticClass:"mt-3",attrs:{deck:""}},[r("b-card",{attrs:{"bg-variant":"light"},scopedSlots:t._u([{key:"header",fn:function(){return[r("h5",{staticClass:"mb-0"},[r("b-icon",{staticClass:"mr-1",attrs:{icon:"key",animation:"fade","font-scale":"1",variant:"success"}}),t._v(" Доступы сотрудников ")],1)]},proxy:!0}])},[r("b-card-text",[t._v(" Вход в программу только под паролем. Настраиваемые права доступа к разным модулям программы ")])],1),r("b-card",{attrs:{"bg-variant":"light"},scopedSlots:t._u([{key:"header",fn:function(){return[r("h5",{staticClass:"mb-0"},[r("b-icon",{staticClass:"mr-1",attrs:{icon:"cash",animation:"fade","font-scale":"1",variant:"success"}}),t._v(" Ценообразование ")],1)]},proxy:!0}])},[r("b-card-text",[t._v(" Ценообразования с учетом цены, ограниченных наценок и др. Отдельное ценообразование на маркетинговые продукты и резервирование ")])],1),r("b-card",{attrs:{"bg-variant":"light"},scopedSlots:t._u([{key:"header",fn:function(){return[r("h5",{staticClass:"mb-0"},[r("b-icon",{staticClass:"mr-1",attrs:{icon:"clock",animation:"fade","font-scale":"1",variant:"success"}}),t._v(" Акции ")],1)]},proxy:!0}])},[r("b-card-text",[t._v(" Акции со скидками по дням недели, времени суток и периоду ")])],1)],1),r("b-card-group",{staticClass:"mt-3",attrs:{deck:""}},[r("b-card",{attrs:{"bg-variant":"light"},scopedSlots:t._u([{key:"header",fn:function(){return[r("h5",{staticClass:"mb-0"},[r("b-icon",{staticClass:"mr-1",attrs:{icon:"gift",animation:"fade","font-scale":"1",variant:"success"}}),t._v(" Скидки ")],1)]},proxy:!0}])},[r("b-card-text",[t._v(" Клиенты могут получать скидки на весь товар и на отдельные категории товаров. ")])],1),r("b-card",{attrs:{"bg-variant":"light"},scopedSlots:t._u([{key:"header",fn:function(){return[r("h5",{staticClass:"mb-0"},[r("b-icon",{staticClass:"mr-1",attrs:{icon:"building",animation:"fade","font-scale":"1",variant:"success"}}),t._v(" Маркетинг ")],1)]},proxy:!0}])},[r("b-card-text",[t._v(" Выведение маркетинговых позиций в приоритет, блокирование ненужных позций, подсказка маркетинговых позиций на кассе ")])],1),r("b-card",{attrs:{"bg-variant":"light"},scopedSlots:t._u([{key:"header",fn:function(){return[r("h5",{staticClass:"mb-0"},[r("b-icon",{staticClass:"mr-1",attrs:{icon:"file",animation:"fade","font-scale":"1",variant:"success"}}),t._v(" Прайслисты ")],1)]},proxy:!0}])},[r("b-card-text",[t._v(" Работа с прайслистами всех поставщиков ")])],1)],1),r("b-card-group",{staticClass:"mt-3",attrs:{deck:""}},[r("b-card",{attrs:{"bg-variant":"light"},scopedSlots:t._u([{key:"header",fn:function(){return[r("h5",{staticClass:"mb-0"},[r("b-icon",{staticClass:"mr-1",attrs:{icon:"pencil-square",animation:"fade","font-scale":"1",variant:"success"}}),t._v(" Заказ ")],1)]},proxy:!0}])},[r("b-card-text",[t._v(" Заказ в одной программе. Подбор лучших цен с учетом бонусируемости в маркетинговых контрактах ")])],1),r("b-card",{attrs:{"bg-variant":"light"},scopedSlots:t._u([{key:"header",fn:function(){return[r("h5",{staticClass:"mb-0"},[r("b-icon",{staticClass:"mr-1",attrs:{icon:"truck",animation:"fade","font-scale":"1",variant:"success"}}),t._v(" Транзит и отказы ")],1)]},proxy:!0}])},[r("b-card-text",[t._v(" Информация о заказанном товаре сохраняется в программе. Отказы также удобно обрабатываются в программе ")])],1),r("b-card",{attrs:{"bg-variant":"light"},scopedSlots:t._u([{key:"header",fn:function(){return[r("h5",{staticClass:"mb-0"},[r("b-icon",{staticClass:"mr-1",attrs:{icon:"printer",animation:"fade","font-scale":"1",variant:"success"}}),t._v(" Приход товара и печать ценников ")],1)]},proxy:!0}])},[r("b-card-text",[t._v(" Товар при приходе проверяется на корректность количетва, цены закупки, срока годности и т.д. ")])],1)],1),r("b-card-group",{staticClass:"mt-3",attrs:{deck:""}},[r("b-card",{attrs:{"bg-variant":"light"},scopedSlots:t._u([{key:"header",fn:function(){return[r("h5",{staticClass:"mb-0"},[r("b-icon",{staticClass:"mr-1",attrs:{icon:"file-arrow-down",animation:"fade","font-scale":"1",variant:"success"}}),t._v(" Приходные и возвратные накладные ")],1)]},proxy:!0}])},[r("b-card-text",[t._v(" Приходные накладные загружаеются в программу, возвраты осуществляются в три клика ")])],1),r("b-card",{attrs:{"bg-variant":"light"},scopedSlots:t._u([{key:"header",fn:function(){return[r("h5",{staticClass:"mb-0"},[r("b-icon",{staticClass:"mr-1",attrs:{icon:"box",animation:"fade","font-scale":"1",variant:"success"}}),t._v(" Остатки ")],1)]},proxy:!0}])},[r("b-card-text",[t._v(" Удобная работа с остатками и просмотр полной информации о товаре: кто ответственный за его заказ, кто сканировал при приходе. ")])],1),r("b-card",{attrs:{"bg-variant":"light"},scopedSlots:t._u([{key:"header",fn:function(){return[r("h5",{staticClass:"mb-0"},[r("b-icon",{staticClass:"mr-1",attrs:{icon:"cash",animation:"fade","font-scale":"1",variant:"success"}}),t._v(" Переоценка ")],1)]},proxy:!0}])},[r("b-card-text",[t._v(" Быстрая переоценка с учетом ценовой политики аптеки и ограниченний по наценкам ")])],1)],1),r("b-card-group",{staticClass:"mt-3",attrs:{deck:""}},[r("b-card",{attrs:{"bg-variant":"light"},scopedSlots:t._u([{key:"header",fn:function(){return[r("h5",{staticClass:"mb-0"},[r("b-icon",{staticClass:"mr-1",attrs:{icon:"trash",animation:"fade","font-scale":"1",variant:"success"}}),t._v(" Списание ")],1)]},proxy:!0}])},[r("b-card-text",[t._v(" Списание в 2 клика ")])],1),r("b-card",{attrs:{"bg-variant":"light"},scopedSlots:t._u([{key:"header",fn:function(){return[r("h5",{staticClass:"mb-0"},[r("b-icon",{staticClass:"mr-1",attrs:{icon:"box",animation:"fade","font-scale":"1",variant:"success"}}),t._v(" Интвентаризация ")],1)]},proxy:!0}])},[r("b-card-text",[t._v(" Инвентаризация без остановки аптеки на любом протяжении времени ")])],1),r("b-card",{attrs:{"bg-variant":"light"},scopedSlots:t._u([{key:"header",fn:function(){return[r("h5",{staticClass:"mb-0"},[r("b-icon",{staticClass:"mr-1",attrs:{icon:"laptop",animation:"fade","font-scale":"1",variant:"success"}}),t._v(" Касса ")],1)]},proxy:!0}])},[r("b-card-text",[t._v(" Продажи и допродажи, РРО, возвраты покупателям, работа с несколькими чеками одновременно ")])],1)],1),r("b-card-group",{staticClass:"mt-3",attrs:{deck:""}},[r("b-card",{attrs:{"bg-variant":"light"},scopedSlots:t._u([{key:"header",fn:function(){return[r("h5",{staticClass:"mb-0"},[r("b-icon",{staticClass:"mr-1",attrs:{icon:"cart",animation:"fade","font-scale":"1",variant:"success"}}),t._v(" Собственный интернет-магазин ")],1)]},proxy:!0}])},[r("b-card-text",[t._v(" Покупатели могут бронировать товар, который заберут прямо сейчас либо заказывать доставку с дистрибьюторов в аптеку ")])],1),r("b-card",{attrs:{"bg-variant":"light"},scopedSlots:t._u([{key:"header",fn:function(){return[r("h5",{staticClass:"mb-0"},[r("b-icon",{staticClass:"mr-1",attrs:{icon:"mouse2",animation:"fade","font-scale":"1",variant:"success"}}),t._v(" Резервирование ")],1)]},proxy:!0}])},[r("b-card-text",[t._v(" Резервирование товара по номеру телефона покупателя на кассе ")])],1),r("b-card",{attrs:{"bg-variant":"light"},scopedSlots:t._u([{key:"header",fn:function(){return[r("h5",{staticClass:"mb-0"},[r("b-icon",{staticClass:"mr-1",attrs:{icon:"search",animation:"fade","font-scale":"1",variant:"success"}}),t._v(" Аналитика ")],1)]},proxy:!0}])},[r("b-card-text",[t._v(" Глубокая аналитика всех аспектов работы аптечной сети ")])],1)],1),r("b-card-group",{staticClass:"mt-3",attrs:{deck:""}},[r("b-card",{attrs:{"bg-variant":"light"},scopedSlots:t._u([{key:"header",fn:function(){return[r("h5",{staticClass:"mb-0"},[r("b-icon",{staticClass:"mr-1",attrs:{icon:"file",animation:"fade","font-scale":"1",variant:"success"}}),t._v(" Бухгалтерия ")],1)]},proxy:!0}])},[r("b-card-text",[t._v(" Экспорт в 1С, Медок ")])],1),r("b-card",{attrs:{"bg-variant":"light"},scopedSlots:t._u([{key:"header",fn:function(){return[r("h5",{staticClass:"mb-0"},[r("b-icon",{staticClass:"mr-1",attrs:{icon:"cash",animation:"fade","font-scale":"1",variant:"success"}}),t._v(" Финансы ")],1)]},proxy:!0}])},[r("b-card-text",[t._v(" Учет взаиморасчетов с поставщиками ")])],1),r("b-card",{attrs:{"bg-variant":"light"},scopedSlots:t._u([{key:"header",fn:function(){return[r("h5",{staticClass:"mb-0"},[r("b-icon",{staticClass:"mr-1",attrs:{icon:"cloud",animation:"fade","font-scale":"1",variant:"success"}}),t._v(" Многое другое ")],1)]},proxy:!0}])},[r("b-card-text",[t._v(" Программа постоянно развивается, аптеки беспатно получают обновления в момент их выхода ")])],1)],1)],1)},j=[],O={},P=Object(b["a"])(O,S,j,!1,null,null,null),M=P.exports,E=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"about"},[r("b-card",{attrs:{"bg-variant":"light"},scopedSlots:t._u([{key:"header",fn:function(){return[r("h5",{staticClass:"mb-0"},[r("b-icon",{staticClass:"mr-1",attrs:{icon:"key",animation:"fade","font-scale":"1",variant:"success"}}),t._v(" Для аптек и аптечных сетей ")],1)]},proxy:!0}])},[r("b-card-text",[r("p",[t._v(" Мы с радостью предоставим Вам наше программное обеспечение и будем поддерживать его. ")]),r("p",[t._v(" Мы можем транслировать бонусы от фармацевтических компаний Вашей организации, если у Вас нет своего маркетолога ")]),r("p",[t._v(" Также мы можем дополнить Ваше программное обеспечение или сайт нашей обновляемой системой замен и допродаж на кассе (API). ")])])],1),r("b-card",{staticClass:"mt-2",attrs:{"bg-variant":"light"},scopedSlots:t._u([{key:"header",fn:function(){return[r("h5",{staticClass:"mb-0"},[r("b-icon",{staticClass:"mr-1",attrs:{icon:"key",animation:"fade","font-scale":"1",variant:"success"}}),t._v(" Для фармацевтических компаний ")],1)]},proxy:!0}])},[r("b-card-text",[r("p",[t._v(" Мы постоянно поддерживаем базу продуктов в актуальном состоянии и бесплатно добавим объективную информацию о Вашей продукции в нашу базу: изображения, корректное название и состав, форма выпуска, аналоги, преимущества и рекомендации для фармацевтов ")]),r("p",[t._v(" Мы предложим нашим клиентам (аптечным сетям и аптекам) Ваши маркетинговые контракты ")]),r("p",[t._v(" Мы можем предложить Вам нашу систему аналитики вторичных продаж. ")]),r("p",[t._v(" Разместим Ваши товары в нашем интернет-магазине и предоставим доступ к управлению ассортиментом ")])])],1),r("b-card",{staticClass:"mt-2",attrs:{"bg-variant":"light"},scopedSlots:t._u([{key:"header",fn:function(){return[r("h5",{staticClass:"mb-0"},[r("b-icon",{staticClass:"mr-1",attrs:{icon:"key",animation:"fade","font-scale":"1",variant:"success"}}),t._v(" Для фармацевтических дистрибьюторов ")],1)]},proxy:!0}])},[r("b-card-text",[r("p",[t._v(" Разместим Ваши товары в нашем интернет-магазине и предоставим доступ к управлению ассортиментом ")]),r("p",[t._v(" Разработаем для Вас индивидуальные облачные решения. ")]),r("p",[t._v(" Мы предоставим Вам онлайн аналитику анализа конкуретных предложений (с историей). ")])])],1),r("b-card",{staticClass:"mt-2",attrs:{"bg-variant":"light"},scopedSlots:t._u([{key:"header",fn:function(){return[r("h5",{staticClass:"mb-0"},[r("b-icon",{staticClass:"mr-1",attrs:{icon:"key",animation:"fade","font-scale":"1",variant:"success"}}),t._v(" Для разработчиков программного обеспечения ")],1)]},proxy:!0}])},[r("b-card-text",[r("p",[t._v(" Мы открыты для сотрудничества и уверены, что объединение опыта и наработок позволит нам предоставлять нашим с Вами клиентам еще более высокий сервис. ")])])],1)],1)},X=[],A={},H=Object(b["a"])(A,E,X,!1,null,null,null),Q=H.exports,U=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"about"},[r("h1",[t._v("Некоторые скриншоты и видеообзоры")]),r("b-alert",{attrs:{show:""}},[t._v("В связи с тем, що программа для аптек Интайла получает еженедельные обновления, функциональность и дизайн актуальной версии могут отличатся. Изменения только в лучшую сторону и бесплатны для клиентов.")]),r("b-card-group",{attrs:{deck:""}},[r("b-card",{staticClass:"mb-2",attrs:{header:"Скриншот КАССЫ",title:"Эффективная замена","img-src":"https://docs.google.com/drawings/d/e/2PACX-1vSp1FC4daCVONIZHH4NXxAaS3j3eUBmMr50vPJzVMf16hgszhD8ZkIrf-_vZ7ma8airQ1lrZ9wDKgMh/pub?w=1440&h=810","img-bottom":"",tag:"article","bg-variant":"light"}},[r("b-card-text",{staticClass:"text-left"},[r("ul",[r("li",[t._v("При поиске или сканировании на кассе фармацевт "),r("b",[t._v("сразу")]),t._v(" видит аналоги, которые можно предложить на замену")]),r("li",[t._v("Программа сама выводит в приоритет замены "),r("b",[t._v("маркетинговые")]),t._v(" позиции. Маркетинговые позиции можно бонусировать фармацевту за продажу (красным).")]),r("li",[t._v("Учет количества замен и допродаж от конкретного фармацевта программа ведет автоматически, что позволяет оценивать "),r("b",[t._v("эффективность персонала")])])])])],1),r("b-card",{staticClass:"mb-2",attrs:{"img-src":"https://docs.google.com/drawings/d/e/2PACX-1vRjC7LaEuwtJ_G_Z4rhXO-5uyK99w-EkWXfiqyiPA48xPSHGOA5OUiQU6qVQs3DnImxF8Qx8uGHen0J/pub?w=1440&h=810",header:"Скриншот КАССЫ",title:"Допродажа, увеличивающая чек","img-bottom":"",tag:"article","bg-variant":"light"}},[r("b-card-text",{staticClass:"text-left"},[r("ul",[r("li",[t._v("После добавления в чек, фармацевт "),r("b",[t._v("сразу")]),t._v(" видит, какой продукт оптимально предложить как допродажу и показывает для чего клиенту нужно купить эту допродажу.")]),r("li",[t._v("В приоритете программа предлагает допродавать "),r("b",[t._v("маркетинговые")]),t._v(" позиции.")]),r("li",[t._v("Допродажи подсказываются не только на 1 позицию, но и на "),r("b",[t._v("связки в чеке")]),t._v('. Например, на связку "Спрей в нос + Порошок от простуды" программа предложит еще Таблетки от простуды.')])])])],1)],1),r("b-card-group",{staticClass:"my-3",attrs:{deck:""}},[r("b-card",{staticClass:"mb-2",attrs:{header:"Скриншот ЗАКАЗА",title:"Профессиональный заказ в аптке","img-src":"https://docs.google.com/drawings/d/e/2PACX-1vRM3Jbx7jAB8-5_EEhLDMMZD0TmIg7-_5UYH7h-ldCHLb7oqguWkoWZoi_40jkrZGlMcqj5qYDVH0tj/pub?w=1440&h=810","img-bottom":"",tag:"article","bg-variant":"light"}},[r("b-card-text",{staticClass:"text-left"},[r("ul",[r("li",[t._v("При заказе, если позиция вызывает сомнения, можно в один клик увидить статистику продаж данного товара")]),r("li",[t._v("Программа формирует заказ самостоятельно в процессе работы аптеки")]),r("li",[t._v("Просмотр прайслистов и добавление в заказ и прайсов прямо в модуле заказа")])])])],1),r("b-card",{staticClass:"mb-2",attrs:{header:"Скриншот ОСТАТКОВ",title:"Скрупулезное управление остатками аптеки","img-src":"https://docs.google.com/drawings/d/e/2PACX-1vQOLrbO73pFkCd_sX3i_1DYI-nrGWtV2tCjKWVbbYqQwnAS1GmTdUXZUS536XPHE8o2wISXFpWQWUxy/pub?w=1440&h=810","img-bottom":"",tag:"article","bg-variant":"light"}},[r("b-card-text",{staticClass:"text-left"},[r("ul",[r("li",[t._v("Каждая упаковка хранит детальную информацию кто, когда и зачем ее заказал")]),r("li",[t._v("Также хранится информация о документах на товар, истории переоценок товара и др.")]),r("li",[t._v("Чтобы переценить, списать или сделать пересорт по товару нужны отдельные права доступа (заведующей или менеджера)")])])])],1)],1),r("b-container",[r("b-row",{attrs:{"align-h":"center"}},[r("b-col",{attrs:{xs:"12",md:"6"}},[r("h3",{staticClass:"my-3"},[t._v(" Видеообзор заказа ")]),r("b-embed",{attrs:{type:"iframe",aspect:"16by9",src:"https://www.youtube.com/embed/dG8KQ_xTlwU?rel=0",allowfullscreen:""}})],1),r("b-col",{attrs:{xs:"12",md:"6"}},[r("h3",{staticClass:"my-3"},[t._v(" Видеообзоры кассы ")]),r("b-embed",{attrs:{type:"iframe",aspect:"16by9",src:"https://www.youtube.com/embed/dG8KQ_xTlwU?rel=0",allowfullscreen:""}})],1)],1)],1)],1)},Z=[],$={},G=Object(b["a"])($,U,Z,!1,null,null,null),T=G.exports,q=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"about"},[r("b-card",{attrs:{"bg-variant":"light"},scopedSlots:t._u([{key:"header",fn:function(){return[r("h5",{staticClass:"mb-0"},[r("b-icon",{staticClass:"mr-1",attrs:{icon:"key",animation:"fade","font-scale":"1",variant:"success"}}),t._v(" Свяжитесь с нами для быстрой установки программы в Ваших аптеках ")],1)]},proxy:!0}])},[r("b-card-text",[r("p",[t._v(" Адрес: Киев, проспект Победы 32 ")]),r("p",[t._v(" Телефоны: O5O 463 46 9O, O93 566 18 6O ")]),r("p",[t._v(" Почта: document @ intaila.com ")])])],1)],1)},D=[],I={},W=Object(b["a"])(I,q,D,!1,null,null,null),J=W.exports;s["default"].use(h["a"]);var L=[{path:"/",name:"Home",component:w,meta:{layout:"main-layout",title:"Программа для аптеки Интайла",description:"Облачная программа для аптеки Интайла, открыть аптеку"}},{path:"/modules",name:"Modules",component:M,meta:{layout:"main-layout",title:"Модули программы для аптеки Интайла",description:"Модули и возможности программы для аптеки Интайла, открыть аптеку"}},{path:"/partnership",name:"Partnership",component:Q,meta:{layout:"main-layout",title:"Сотрудничество по программе для аптеки Интайла",description:"Мы готовы сотрудничать с аптеками, производителями, дистрибьюторами"}},{path:"/media",name:"Media",component:T,meta:{layout:"main-layout",title:"Скриншоты и видео программы для аптек Интайла",description:"Видеообзор и скриншоты программы для аптеки"}},{path:"/contact",name:"Contact",component:J,meta:{layout:"main-layout",title:"Связаться для установки программы для аптеки",description:"Контакты, телефон, адрес для установки облачной программы для аптек"}}],V=new h["a"]({scrollBehavior:function(){return{x:0,y:0}},mode:"history",base:"/",routes:L});V.beforeEach((function(t,a,r){for(var s=t.matched.slice().reverse().find((function(t){return t.meta&&t.meta.title&&t.meta.description})),n=document.getElementsByTagName("meta"),i=0;i<n.length;i++)"description"===n[i].name.toLowerCase()&&n[i].remove();if(s){document.title=s.meta.title;var e=document.createElement("meta");e.name="description",e.content=s.meta.description,document.head.appendChild(e)}r()}));var K=V,B=r("2f62");s["default"].use(B["a"]);var F=new B["a"].Store({state:{},mutations:{},actions:{},modules:{}});s["default"].config.productionTip=!1,s["default"].use(g["a"]),s["default"].use(_["a"]),new s["default"]({router:K,store:F,render:function(t){return t(f)}}).$mount("#app")},"5c0b":function(t,a,r){"use strict";var s=r("9c0c"),n=r.n(s);n.a},"5ced":function(t,a,r){},"9c0c":function(t,a,r){},cccb:function(t,a,r){"use strict";var s=r("5ced"),n=r.n(s);n.a}});
//# sourceMappingURL=app.js.map