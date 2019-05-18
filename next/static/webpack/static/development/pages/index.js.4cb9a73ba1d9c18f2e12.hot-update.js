webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _main = _interopRequireDefault(__webpack_require__(/*! ../layouts/main */ "./layouts/main.js"));

var _Contact = _interopRequireDefault(__webpack_require__(/*! ../sections/Contact/Contact */ "./sections/Contact/Contact.js"));

var _settings = _interopRequireDefault(__webpack_require__(/*! ../util/settings */ "./util/settings.js"));

var _Feature = _interopRequireDefault(__webpack_require__(/*! ../components/Feature/Feature */ "./components/Feature/Feature.js"));

var _Testimonials = _interopRequireDefault(__webpack_require__(/*! ../sections/Testimonials/Testimonials */ "./sections/Testimonials/Testimonials.js"));

var _medical = _interopRequireDefault(__webpack_require__(/*! ../static/svg/medical.svg?include */ "./static/svg/medical.svg?include"));

var _care = _interopRequireDefault(__webpack_require__(/*! ../static/svg/care.svg?include */ "./static/svg/care.svg?include"));

var _home = _interopRequireDefault(__webpack_require__(/*! ../static/svg/home.svg?include */ "./static/svg/home.svg?include"));

var _logo = _interopRequireDefault(__webpack_require__(/*! ../static/svg/logo.svg?include */ "./static/svg/logo.svg?include"));

var _head = _interopRequireDefault(__webpack_require__(/*! next/head */ "./node_modules/next/head.js"));

var _reactGa = _interopRequireDefault(__webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/react-ga.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var Index =
/*#__PURE__*/
function (_Component) {
  _inherits(Index, _Component);

  function Index(props) {
    var _this;

    _classCallCheck(this, Index);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Index).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "animateIn", function () {
      var tl = new TimelineMax({
        paused: true,
        delay: 0.5
      });
      tl.to(_this.container, 1, {
        autoAlpha: 1
      });
      tl.staggerFromTo(_this.AnimationElements, 2, {
        autoAlpha: 0,
        y: 50
      }, {
        autoAlpha: 1,
        y: 0,
        ease: Expo.easeOut
      }, 0.25);
      tl.play();
    });

    _this.state = {
      animDone: true
    };
    _this.AnimationElements = [];
    _this.ASSET_PATH = _settings.default.ASSET_PATH + "images/landing/";
    return _this;
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      TweenMax.set(this.container, {
        autoAlpha: 0
      });
      TweenMax.set(this.AnimationElements, {
        autoAlpha: 0
      });
      this.animateIn();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      this.AnimationElements = [];
      return _react.default.createElement(_main.default, {
        id: "Home",
        menu: {
          show: this.state.animDone
        }
      }, _react.default.createElement("div", {
        id: "section-home",
        ref: function ref(el) {
          return _this2.container = el;
        },
        style: {
          opacity: 0
        }
      }, _react.default.createElement("div", {
        style: {
          backgroundColor: _settings.default.colors.primaryDark
        }
      }, _react.default.createElement("img", {
        id: "landing-image",
        src: this.ASSET_PATH + "intro.png"
      }), _react.default.createElement("div", {
        className: "offset-2 col-8 offset-sm-1 col-sm-4 logo-over-image",
        dangerouslySetInnerHTML: {
          __html: _logo.default
        }
      }), _react.default.createElement("div", {
        className: "row intro-content"
      }, _react.default.createElement("div", {
        className: "offset-1 col-10 col-md-8 col-lg-6 col-xl-4"
      }, _react.default.createElement("h1", null, "Providing Families", _react.default.createElement("br", null), "with Peace of Mind"), _react.default.createElement("p", null, "We believe life is a gift. Hospall Private Homecare provides peace of mind to families with the health and care needs of their loved ones in King Township and the surrounding York and Simcoe regions. Our commitment is to maintain open lines of communication within our multi disciplinary team to ensure the care is being provided consistent to the client. Our word is our promise."), _react.default.createElement("a", {
        className: "cta",
        href: "/about"
      }, "Learn More")))), _react.default.createElement("div", {
        className: "services-briefly"
      }, _react.default.createElement("div", {
        className: "row services-briefly-intro"
      }, _react.default.createElement("div", {
        className: "col-12 col-sm-6 col-lg-6 flex-center services-briefly-intro-img"
      }, _react.default.createElement("img", {
        style: {
          maxWidth: "100%"
        },
        src: this.ASSET_PATH + "playing-chess.jpg"
      })), _react.default.createElement("div", {
        className: "col-12 col-sm-6 offset-lg-1 col-lg-5 flex-center services-briefly-intro-info",
        style: {
          justifyContent: 'flex-start'
        }
      }, _react.default.createElement("h2", {
        className: "dark",
        style: {
          marginBottom: 30
        }
      }, "How We Can Help"), _react.default.createElement("p", {
        className: "dark"
      }, "By providing quality, personalized private our trained staff will provide a level of professionalism that allows for healthy, safe and positive interactions. We provide a variety of services to suit the needs of you and your loved ones."), _react.default.createElement("a", {
        className: "cta dark",
        href: "/services"
      }, "View Services"))), _react.default.createElement("div", {
        className: "row d-none d-sm-flex"
      }, _react.default.createElement("div", {
        className: "col-sm-6 col-md-4"
      }, _react.default.createElement(_Feature.default, {
        title: "Private Home Care",
        icon: _home.default,
        text: "We specialize but are not limited to provide live-in support including short-term postoperative care. We also organize and help clients with daily activities to help to stimulate their mind and enrich their interests. We are flexible to build a care plan that is best for our clients."
      })), _react.default.createElement("div", {
        className: "col-sm-6 col-md-4"
      }, _react.default.createElement(_Feature.default, {
        title: "Home Medical Services",
        icon: _medical.default,
        text: "We provide medical and personal home care services by skilled professionals, including help with personal hygiene. We also provide medical services such as bloodwork and medication administration, and accompanying clients to appointments."
      })), _react.default.createElement("div", {
        className: "col-sm-6 col-md-4"
      }, _react.default.createElement(_Feature.default, {
        title: "Respite Care",
        icon: _care.default,
        text: "Caring for loved ones can be a full-time job and we recognize it can be exhausting. When you need a rest, we are here to relieve you. We can provide 24-hour care in the comfort of our client\u2019s own home."
      })))), _react.default.createElement(_Testimonials.default, null), _react.default.createElement(_Contact.default, {
        description: "In order to maintain the highest quality of care for our clients and their families, we ensure each case is evaluated by an assessment expert. Let\u2019s work together to find the best type of care for you and your loved one."
      })));
    }
  }]);

  return Index;
}(_react.Component);

var _default = Index;
exports.default = _default;
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  

/***/ }),

/***/ "./static/json/data.json":
/*!*******************************!*\
  !*** ./static/json/data.json ***!
  \*******************************/
/*! exports provided: services, benefits, testimonials, about, careers, FAQ, default */
/***/ (function(module) {

module.exports = {"services":[{"name":"Personalized Private Homecare","description":["We specialize but are not limited to provide live-out support including palliative and postoperative care. We can also organize and help clients with daily activities to help to stimulate their mind and enrich their interests. We are flexible to build a care plan that is best for our clients.","Our care services our personalized and flexible to the changing needs of our clients. The needs may differ between clients but our goal is always consistent to help our clients lead safe, independent and balanced lives while achieving peace of mind and body. Hospall encourages our clients to be physically, mentally, socially, and emotionally engaged. We believe we can help them retain better cognitive function, stay healthier, and live in-dependently longer within their own homes. When needed we can supplement the care our clients receive while they are admitted to a hospital."]},{"name":"Failure to Thrive (FTT)","description":["Clients with failure to thrive commonly have decreased appetite, poor nutrition, physical inactivity and depression. These symptoms combined have significant increase risk of falls.","The consistent and compassionate care provided by our multi-disciplinary team has a focus on improving our clients frailty, medical and nutritional concerns. We organize and help clients implement activities of daily living to stimulate their mind and enrich their interests. We grocery shop, prepare nutritional meals and when required assist in feeding our clients. We will keep them company during meal times to support their social and nutritional needs. We strive to elevate and enrich their health and overall wellbeing. From our experience this helps them over come FTT and keep them safe."]},{"name":"Home & Medical Services","description":["We provide medical and personal home care services by skilled professionals, including help with personal hygiene and daily routine, as well as medical services such as bloodwork, medication administration, nail and foot care. We are also insured to accompany clients to appointments.",["Assistance with activities of daily living","Medication administration","Assistance with feeding, meal preparation and grocery shopping","Toileting","Companionship","Light housekeeping","Laundry care","Running errands","Escort and support our clients to their medical appointments","Accompanying and supporting our clients to social outings"]]},{"name":"Respite Care","description":["Caring for loved ones can be a full-time job. We recognize that often you have your own life responsibilities that also need your attention. Being a caregiver can be exhausting. When you need a reprieve, we are here to assist.","Medical conditions such as Alzheimer’s and Dementia can be very physical and mentally challenging. You can be guaranteed that we will be there to help you navigate those challenges and help keep your loved ones safe. When you need a rest, we are here to relieve you to help prevent caregiver burnout, and help you maintain a healthy balance with your own life. We can provide a few hours of respite care up to 24-hour care in the comfort of our client’s own home or supplement the care if your loved one is admitted to hospital or other place of residence."]},{"name":"End of Life & Palliative Care","description":["End of Life Care includes Palliative Care. If our clients have been diagnosed with an illness or ailment that cannot be cured. Our goal is to make them as comfortable as possible and maintain their dignity. We also aim to improve quality of life.","If you or your loved one(s) are facing a life-limiting illness that requires care and emotional support. An integrated Palliative Care approach can help you achieve the best possible quality of life from diagnosis to the end of life. Palliative care can:",["Help improve and maintain quality of life","Reduce or relieve physical and psychological symptoms","Help you have a more peaceful and dignified death","Provide support for your family"],"In the early stages of illness trajectory, focusing on open and honest communication on goals of care, psychosocial, spiritual support, and pain and symptom management, palliative care offers you and your family a greater sense of control as you are actively involved in your own care. Identifying your needs early, can help to anticipate, prevent and relieve suffering."]},{"name":"Short-term Postoperative Care","description":["Short term post operative care or convalescent care in the comfort of your own home. We believe our clients will retain better cognitive function, stay healthier, and be able to live in-dependently longer within their own homes.","It can be overwhelming transitioning from hospital to home. We believe with the proper supports our clients will retain better cognitive function, stay healthier, and be able to live in-dependently longer. Our goal is to assist our clients to safely build strength and independence in the comfort of their own home. We are insured to transport and escort our clients to rehab and follow up medical appointments as needed. Our staff will assist with nutritious meal preparation, bathing and dressing. Falls are a common reality post operatively and we want to ensure your loved ones are safe. Our registered staff provide post operative wound care to help prevent infections."]}],"benefits":[{"name":"Family-Centric Evolving Care","description":"Our clients are the center of what we do, and our team integrates seamlessly into your family. We can be with you and your loved ones as often as needed, working together on what is best for the client today and tomorrow. We build personal rapport with every client while respecting their privacy."},{"name":"Breadth of Expertise","description":"Our team is comprised of caring registered nurses, personal support workers, registered massage therapists, diabetic foot nurses, physiotherapists, dental hygienists, dentists, companions, housekeepers, and activity planners. They are bonded and have appropriate certifications."},{"name":"Improving Quality of Life","description":"We are determined to create quality experiences that help our clients enjoy their lives to the fullest. Some activities include: casual or fine dining, ballet and theatre, beauty care, transportation, exercise programs/personal training, and daily activities to allow clients to maintain their interests."}],"testimonials":{"widget":[{"name":"Greg & Alison","relationship":"Son and Daughter of Michael","review":"I cannot put into words how fortunate my sister and I are to have Hospall in our lives. My dad was diagnosed with pancreatic cancer and the disease took control of his life. Hospall was brought on near the end of my dad’s life and they were so caring, gentle and compassionate with my dad.","url":"greg-alison","image":"mildred.jpg"},{"name":"Becky","relationship":"Daughter of Ivan","review":"We never had to worry what caregiver would come, if his care would be thoughtful and caring, how medication or supplies would be ordered, when the doctor should be called and what to do at the end of his life. I would recommend Hospall to anyone who requires palliative care for a loved one.","url":"becky","image":"mildred.jpg"},{"name":"Christine","relationship":"Daughter of Ryan & Sandra","review":"Hospall Private Home Care has been a blessing for my family, and especially for our elderly parents. From the beginning the team has been professional, skillful, compassionate and consistent... We feel very supported with the plans in place as our parents age and their needs change. Hospall is a source of security and comfort for everyone.","url":"christine","image":"mildred.jpg"}],"page":[{"content":"I cannot put into words how fortunate my sister and I are to have Hospall in our lives. My dad was diagnosed with pancreatic cancer and the disease took control of his life. Hospall was brought on near the end of my dads life and they were so caring, gentle and compassionate with my dad. When we received the phone call from Hospall saying dad was not doing well and to get there, the call was made right from Michelle and was very caring. We did not make it there in time, but Hospall was there and did not leave my dads side until he passed. I cannot put into words how comforting that was that there was someone that we know with him as he left is Hospall has been great working with my mom as she recovers from some health problems. We have been very lucky to have such kind and compassionate people from Hospall in my familes life. Hospall staff and Michelle and Erwin are now part of our family and will always be","client":"Greg and Alison"},{"content":"As soon as my husband received the diagnosis 'Terminal, incurable', we arranged for Hospall to care for him. He was in the comfort of our home and the care that he received was excellent. We never had to worry what caregiver would come, when that person would come, if his care would be thoughtful and caring, if he and the family would be respected, how medication or supplies would be ordered, when the doctor should be called and what to do at the end of his life. At a stressful time of life, we appreciated that we did not have the burden of worrying about the care that my husband was receiving. I would recommend Hospall to anyone who requires palliative care for a loved one.","client":"Becky Haggith"},{"content":"We knew from the first interview that we had found the right agency. Michelle questioned our parents with sensitivity and insight about their needs and wishes. The assigned caregiver, Elviz, is an excellent fit for our father. Yes, it did take several months for Dad to be completely comfortable but his personal hygiene and safety were always in capable and gentle hands. With Elviz now part of the family, our father has an advocate and our mother has a part-time driver and time to enjoy her pursuits. Erwin, the nursing supervisor, visits several times a month to check Dad's health and does his INR which is much easier than going to the clinic. As their children, we are very pleased that our parents have such honest and cheerful people to help care for them. Thank you, Hospall!","client":"The Harris Family"},{"content":"Hospall Private Home Care has been a blessing for my family, and especially for our elderly parents. From the beginning the team has been professional, skillful, compassionate and consistent. Hospall allows our parents to remain in their home. Assistance is provided with bathing/dressing, home-made meals are prepared daily, and there is time for fun activities and shopping excursions. Hospall can escort them to medical appointments, provide in –home blood tests, and administer medication. Each team member has become part of our family. All this makes Hospall quite unique and provides quality time that has given our parents a new vitality. The Hospall management team is always available and accountable. We feel very supported with the plans in place as our parents age and their needs change. Hospall is a source of security and comfort for everyone.","client":"Christine S"},{"content":"My mother is suffering with alzheimer’s and dementia and she seems to be very happy with the care giver from Hospall and all that she does for her. My father also requires care as he is suffering from the symptoms of a stroke, prostrate cancer, a hip replacement, diabetes and parkinson's. Since my mother is no longer able to make meals, do daily washing of clothes and look after her personal cleanliness, Hospall has been a godsend. I cannot say enough good things about the trustworthiness, kindness and dedication shown with the personal care provided. It makes it an awful lot easier for me to sleep at night, knowing that they are being very well looked after. I am sure for that very same reason my parents are also able to sleep easier. Thank you once again Hospall for everything that you have and are doing for us.","client":"The McGuire Family"},{"content":"The Hospall team is a group of extremely dedicated and professional individuals who go above and beyond to help in any situation. We were so grateful for their service. We would not hesitate to recommend this wonderful team!","client":"The McCarthy Family"},{"content":"Hospall Private Home Care has been a blessing for my family, and especially for our elderly parents. From the beginning the team has been professional, skillful, compassionate and consistent. Hospall allows our parents to remain in their home. Assistance is provided with bathing/dressing, home-made meals are prepared daily, and there is time for fun activities and shopping excursions. Hospall can escort them to medical appointments, provide in –home blood tests, and administer medication. Each team member has become part of our family. All this makes Hospall quite unique and provides quality time that has given our parents a new vitality.","client":"The Arnold Family"},{"content":"My mother has lived with my husband and I for the past ten years. In the last year there has been a noticeable decrease in her ability to walk on her own. She is 95 and dementia is also a big concern for us. We did not want her to go into a nursing home but rather to stay with us, her family and her beloved cat. I had to find a service that would give her the loving care her deserves and along with that, peace of mind for us. I find I get both with Hospall Private Homecare. The staff is kind and attentive to my mother. She smiles when they arrive and the conversations flow eagerly. I feel confident enough to do my errands while they are with her but most of all, my mother can stay in our home and live out her days with dignity.","client":"Betty D"},{"content":"HosPall has been a godsend…. not only do they provide our mother with the care and compassion that we expect for her, but they also provide us with the peace of mind in knowing that she is happy and in good hands. In turn, it provides us with worry-free time with our families.","client":"The Bianchi Family"},{"content":"I have had the opportunit<wbr>y to watch staff in action and without exception I have been impressed with the safe quality of life they provide to their clients.","client":"Marti M.C."},{"content":"Michelle and her team took on managing the palliative care of my father and since have undertaken the complete care of my mother who has advanced dementia and requires around the clock care. They have taken the load fully from the children, have provided timely reporting, my mother’s physical health couldn’t be better and in consideration of her state is as happy and comfortable as we could possibly wish for. Highly recommended.","client":"David H. Y."},{"content":"I had the good fortune of being with Michelle and her colleagues for a period of a month when she nursed my critically ill husband in the hospital. They showed me what compassion was and their caring for me and my family was outstanding. It made bearing my burden so much easier. I would highly recommend her and her staff as competent and totally reliable.","client":"Maxine O."},{"content":"Michelle is an expert in all things related to healthcare and nursing. She is a great judge of character her staff and colleagues are all first class. I would recommend Michelle or any service she chooses to provide to anyone.","client":"Bob Y."}]},"about":{"values":[{"name":"Integrity","description":["At Hospall, we believe integrity is honesty, sincerity and our strong ethics. Our word is our promise, and our goal is to earn your trust. Our team is comprised of dedicated caring individuals that want only the best for our clients. It is a common challenge that elderly clients have a difficult time adjusting to change. We will schedule consistency of caregivers for all our clients. This will provide the continuity of care."]},{"name":"Communication","description":["We strive to maintain open lines of communication with family, doctors, and friends. We believe that this is a integral part of building and maintaining trust, and ensuring our clients are receiving the best care possible that is tailored to their needs."]},{"name":"Professionalism","description":["We provide a high level of professionalism that allows for positive interactions with our clientele. Our team will integrate seamlessly into your family to work together on what is best for the client. All team members are bonded and maintain updated with current certifications."]},{"name":"Client Centricity","description":["We believe life is a gift. We are committed to create quality experiences that help our clients enjoy their lives to the fullest. Our clients are at the centre of what we do, and how we provide our services reflects this philosophy. We will build strong relationships, while respecting clients’ privacy and values."]},{"name":"Balance","description":["We help our clients and their loved ones navigate their health needs to create balance. We will include them in decisions and their goals of care. Our goal is to respect their wishes and support them in having quality of life. With consent, we will work with family physicians, specialty doctors and other health care providers to provide the best care possible."]},{"name":"Quality","description":["As a small private company, we will provide a higher standard of care which is reflected by positive client experiences. Our goal is to keep our clients living safely at home as long as possible. If our clients are admitted to hospital or a long term care facility we can provide additional care to help with the transition. With the proper supports our clients will have quality of life, peace of mind and body."]}],"team":[{"name":"Michelle Frauley","title":"CEO/Founder","image":"michelle-frauley.jpg","bio":["Michelle has over 3 decades of nursing experience, including in family medicine, palliative/end-of-life care, operating room nursing, women’s health, complex long-term care, and community nursing. Her experience has taught her that providing quality healthcare is built from a foundation of care and compassion.","Michelle is committed and caring, someone whose attention to detail fuels her passion and her success. In 2016 she received an award from the International Nurses Association as a Worldwide Leader in Healthcare for her overall achievements with Hospall and her position at King City Medical Associates Nurse Manager. She is highly respected by patients and colleagues, nominated 3x for the Toronto Star Florence Nightingale Award for Ontario nurses.","Michelle has loved King City from the moment she was asked to join the team at King City Medical Associates. She has never looked back at the relationships that she has gained and the ability to nurse in ways she could never have imagined. She is a member of the King Chamber of Commerce and Home Care Ontario.","Michelle founded Hospall Private Home Care in 2013 with the belief that she could lead an amazing group of caregivers into building something remarkable for residents in King and surrounding areas. Michelle has experience showing that interactive caregiving is a method of caring for seniors that promotes physical, mental, social, and emotional well-being.","Her group of caregivers all share Hospall’s vision and mission. They believe that trust and compassion are very important part of entrusting one’s healthcare needs into hiring care. The Hospall team that she has built provides caring and dependable assistance and reliability 24 hours a day, offering total peace of mind. Their objective never changes, providing the highest degree of care to all their patients and the utmost focus on quality of life for all.","She wants everyone to try our service and believe in the Hospall mission as much as she and her team. Michelle looks forward to meeting you and make a difference in you or your loved one’s life."]},{"name":"Erwin Delemos","title":"Home Care Manager","image":"erwin-delemos.jpg","bio":["Erwin Delemos has been a Registered Nurse for two decades. Prior to becoming a nurse he built his experience as a live in personal support worker. His nursing experience has primarily been in family medicine, palliative and long term complex care. Erwin was also a flight nurse, as a member of a critical care team he has experience caring for critically ill patients in an unstable environment.","We are fortunate that he has been the Home Care Manager with Hospall since 2014. Erwin has a strong passion for helping others and making a difference in our clients lives. Erwin’s other passions include traveling and spending time with his family."]}]},"careers":[{"position":"Personal Support Worker","description":"Personal Support Worker (PSW)","image":"personal-support-worker.jpg","responsibilities":["Assist clients with:",["personal and hygiene care","activities of daily living","transferring","feeding","standing, walking, and sitting"],"Meal Preparation","Light Housekeeping","Shopping for clients (grocery and errands)","Medication Reminders","Provide companionship to clients","Ability to follow established care plan, document and chart"],"requirements":[["PSW Certificate","Current CPR/First Aid training","Current Police Record Check or be willing to obtain one","Ability to travel throughout York Region and surrounding area","Access to internet/mobile phone","Ability to communicate verbally and in writing in English","Able to independently lift 23 kilograms","Able to assist clients with standing, walking, sitting and rolling in bed","Demonstrated ability to follow written and verbal instructions"]]},{"position":"Companion","image":"companion.jpg","responsibilities":[["Companionship and conversation with clients","Light housekeeping tasks","Meal preparation","Medication reminders","Laundry","Grocery Shopping/Errands"]],"requirements":["Current CPR/First Aid training","Current Police Record Check or be willing to obtain one","Ability to travel throughout York Region and surrounding area","Access to internet/mobile phone"]},{"position":"Home Care Supervisor","image":"home-care-supervisor.jpg","responsibilities":[["Respond to patient referrals within an appropriate timeline","Develop and document care plan for client","Ensure Patient and Care Providers are safe","Reassess patients at regular visits to ensure the care plan is appropriate","Be responsible for investigation, resolution and reporting of all customer related complaints","Ensure accurate and timely completion of appropriate documentation, including client charting","Actively identify and prevent potential risks with clients","Ensure policies and procedures are enforced and reflect best practices"]],"requirements":[["Current CPR/First Aid training","Current Police Record Check or be willing to obtain one","Ability to travel throughout York Region and surrounding area","Access to internet/mobile phone","Current registration with College of Nurses of Ontario (CNO) as a Registered Nurse or Registered Practical Nurse","2 years experience in the home health care","Be able to establish, build and maintain rapport with clients, their families and other members of our team","Reliable & self-motivated","Ability to work both independently and as a member of a team"]]}],"FAQ":[{"question":"What are the benefits of my loved one staying at home versus LTC?","answer":["We are a privately owned and operated company. Just like our company we want the care to be personalized to each individual not generic. We strive to help our clients lead safe, balanced lives while achieving peace of mind and body. Hospall encourages our clients to be physically, mentally, socially, and emotionally engaged. We believe we can help them retain better cognitive function, stay healthier, and live in-dependently longer all while living their own homes."]},{"question":"What services does Hospall provide?","answer":["We specialize but are not limited to provide live in support including palliative care. We can assist with short term postoperative care for clients of all ages. We provide medial and personal home care services by skilled professionals in our clients home. Home care services include helping with bathing, washing their hair and getting dressed. Medical services include bloodwork, medication administration, nail and foot care. We are also insured to accompany clients to appointments.","We can also organize and help clients with daily activities to help to stimulate their mind and enrich their interests. We are flexible to build a care plan that is best for our clients."]},{"question":"What area do you provide care?","answer":["Hospall Private Homecare provides peace of mind to families with the health and care needs of their loved ones in King Township and the surrounding York and Simcoe regions."]},{"question":"Will I have the same caregiver? What if I do not like my assigned caregiver?","answer":["We will schedule consistency of caregivers for all our clients. This will provide the continuity of care they need and build trustful relationships. As a small private company, we will provide a higher standard of care which is reflected by positive client experiences. We provide a high level of professionalism that allows for positive interactions with our clientele. Our team will integrate seamlessly into your family to work together on what is best for the client."]},{"question":"Is there flexibility around hours I need and time?","answer":["Yes we are very flexible. Our caregivers live out but can provide up to 24 hour a day coverage offering total peace of mind. Just like our company we want the care to be personalized to each individual not generic."]},{"question":"What are the costs of homecare provided by Hospall?","answer":["The hourly rate depends on the caregiver’s skills, experience and location. We will present you with several caregiver options to choose from. Each care plan is customized to suit your needs. Rates differ based on the type of care required and the city where you live. Call us at <a href='tel:+18002088480' class='inline'>1 800 208 8480</a> to determine your needs, and we will be happy to provide all the details. We will help you determine the right care for you or your aging loved ones."]},{"question":"Is there a minimum number of hours per visit?","answer":["Yes, we have a minimum visit time of four hours."]},{"question":"Is the cost for services covered by my health plan or government program?","answer":["Under certain conditions, home care services are tax deductible. We recommend you check with your tax advisor or Revenue Canada to determine if you qualify for a tax deduction.","Every insurance policy is different, but we can help you to determine if our services are covered under your current plan. For more information, <a href='/contact' class='inline'>click here</a> or call our team at <a href='tel:+18002088480' class='inline'>1 800 208 8480</a>"]},{"question":"Are your employees insured?","answer":["To help ensure the safety and wellbeing of our clients, we perform a criminal history background clearance and then cover each caregiver with general liability and workers' compensation insurance."]}]};

/***/ })

})
//# sourceMappingURL=index.js.4cb9a73ba1d9c18f2e12.hot-update.js.map