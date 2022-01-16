/*--S 页面回退刷新--*/
/* function refreshPage() {
	let coni = 0;
	if (coni === 0) {
		window.name = "bencalie";
		coni++;
	}
	if (window.name != "bencalie") {
		location.reload(); //-该方法只有一个参数，当值为 true 时，将强制浏览器从服务器加载页面资源;当值为 false或者未传参时，浏览器则可能从缓存中读取页面
		window.name = "bencalie"; //-只要浏览器窗口不关闭，这个属性就不会销毁
	} else {
		window.name = ""; //-恢复初始值
	}
}
refreshPage(); */
/*--E 页面回退刷新--*/

/*--S 容器轮番图--*/
function containerRotation() {
	let opimglist = document.getElementsByClassName('imglist')[0];
	let opimg = document.querySelectorAll('.img-2');
	let opspan = document.querySelectorAll('.ba2');
	let oporet = document.getElementsByClassName('arrzuo')[0];
	let opnetxt = document.getElementsByClassName('arryou')[0];
	let opary = document.getElementsByClassName('duogongeree')[0];
	let opcon = 0;
	let lock = true;

	function fade(counting) {
		lock = false;
		opimglist.style.transition = 'margin-left 0.5s ease';
		if (counting === 4) {
			opimglist.style.marginLeft = counting * -730 + 'px';
			opcon = 0;
			for (let j = 0; j < 4; j++) {
				opspan[j].style.backgroundColor = '#FFFFFF';
			}
			opspan[opcon].style.backgroundColor = 'red';
			setTimeout(() => {
				opimglist.style.transition = 'none';
				opimglist.style.marginLeft = 0;
			}, 500);
		} else {
			for (let j = 0; j < 4; j++) {
				opspan[j].style.backgroundColor = '#FFFFFF';
			}
			opspan[counting].style.backgroundColor = 'red';
			opimglist.style.marginLeft = opspan[counting].indddel * -730 + 'px';
		}

		setTimeout(() => {
			lock = true;
		}, 500);
	}

	for (let i = 0; i < 4; i++) {

		opspan[i].indddel = i;
		opspan[i].addEventListener('mouseenter', function() {
			opimglist.style.transition = 'margin-left 0.5s ease';
			for (let j = 0; j < 4; j++) {
				opspan[j].style.backgroundColor = '#FFFFFF';
			}
			this.style.backgroundColor = 'red';
			opimglist.style.marginLeft = this.indddel * -730 + 'px';
			opcon = this.indddel;
		});
	}

	oporet.addEventListener('click', () => {
		if (!lock) {
			return;
		}
		opcon--;
		if (opcon < 0) {
			opcon = 3;
		}
		fade(opcon);
	});

	opnetxt.addEventListener('click', () => {
		if (!lock) {
			return;
		}
		opcon++;
		fade(opcon);
	});

	let intervaD2 = setInterval(() => {
		if (!lock) {
			return;
		}
		opcon++;
		fade(opcon);
	}, 500);

	opary.addEventListener('mouseover', () => {
		clearInterval(intervaD2);
	});

	opary.addEventListener('mouseleave', () => {
		intervaD2 = setInterval(() => {
			if (!lock) {
				return;
			}
			opcon++;
			fade(opcon);
		}, 500);
	});
}
containerRotation();
/*--E 容器轮播图--*/

/*--S 图片轮播图--*/
function imgRotation() {
	let oimg = document.querySelectorAll('.img');
	let ospan = document.querySelectorAll('.ban');
	let oret = document.getElementsByClassName('ore')[0];
	let netxt = document.getElementsByClassName('netx')[0];
	let contt = 0;

	function guanlian(clear) {
		for (let j = 0; j < 4; j++) {
			ospan[j].classList.remove('biahuanyans');
			oimg[j].classList.remove('gaoduchi');
		}
		ospan[clear].classList.add('biahuanyans');
		oimg[clear].classList.add('gaoduchi');
	}

	for (let i = 0; i < 4; i++) {
		ospan[i].indel = i;
		ospan[i].addEventListener('mouseenter', function() {
			for (let j = 0; j < 4; j++) {
				ospan[j].classList.remove('biahuanyans');
				oimg[j].classList.remove('gaoduchi');
			}
			this.classList.add('biahuanyans');
			oimg[this.indel].classList.add('gaoduchi');
			contt = this.indel;
		});
	}

	oret.addEventListener('click', () => {
		contt--;
		if (contt < 0) {
			contt = 3;
		}
		guanlian(contt);
	});

	netxt.addEventListener('click', () => {
		contt++;
		if (contt > 3) {
			contt = 0;
		}
		guanlian(contt);
	});

	let intervalID = setInterval(() => {
		contt++;
		if (contt > 3) {
			contt = 0;
		}
		guanlian(contt);
	}, 500);
	document.getElementsByClassName('duogong')[0].addEventListener('mouseover', () => {
		clearInterval(intervalID);
	});
	document.getElementsByClassName('duogong')[0].addEventListener('mouseleave', () => {
		intervalID = setInterval(() => {
			contt++;
			if (contt > 3) {
				contt = 0;
			}
			guanlian(contt);
		}, 500);
	});
}
imgRotation();
/*--E 图片轮播图--*/


/*--S 放大镜--*/
function magnifiers() {
	let dajing = document.getElementsByClassName('fangdajing')[0];
	let datu = document.getElementsByClassName('imggda')[0];
	let xiaotu = document.getElementsByClassName('imggxiao')[0];
	xiaotu.addEventListener('mousemove', function(e) {
		//放大镜跟随鼠标,鼠标指针位于放大元素的中心
		if (e.offsetX - dajing.offsetWidth / 2 < 0) {
			dajing.style.left = 0;
		} else {
			if (e.offsetX - dajing.offsetWidth / 2 > xiaotu.clientWidth - dajing.offsetWidth) {
				dajing.style.left = xiaotu.clientWidth - dajing.offsetWidth + 'px';
			} else {
				dajing.style.left = e.offsetX - dajing.offsetWidth / 2 + 'px';
			}
		}

		if (e.offsetY - dajing.offsetHeight / 2 < 0) {
			dajing.style.top = 0;
		} else {
			if (e.offsetY - dajing.offsetHeight / 2 > xiaotu.clientHeight - dajing.offsetHeight) {
				dajing.style.top = xiaotu.clientHeight - dajing.offsetHeight + 'px';
			} else {
				dajing.style.top = e.offsetY - dajing.offsetHeight / 2 + 'px';
			}
		}

		//大图跟随鼠标并同步小图
		datu.style.left = e.offsetX * -(datu.clientWidth / xiaotu.clientWidth) + dajing.offsetWidth / 2 +
			'px'; //-由于鼠标指针在放大容器中心，因此需要修正实际偏移
		datu.style.top = e.offsetY * -(datu.clientHeight / xiaotu.clientHeight) + dajing.offsetHeight / 2 +
			'px'; //-由于鼠标指针在放大容器中心，因此需要修正实际偏移

		if (e.offsetX * -(datu.clientWidth / xiaotu.clientWidth) + dajing.offsetWidth / 2 > 0) {
			datu.style.left = 0;
		}

		if (e.offsetY * -(datu.clientHeight / xiaotu.clientHeight) + dajing.offsetHeight / 2 > 0) {
			datu.style.top = 0;
		}

		if (e.offsetX * -(datu.clientWidth / xiaotu.clientWidth) + dajing.offsetWidth / 2 < -datu.clientWidth +
			dajing.offsetWidth) {
			datu.style.left = -datu.clientWidth + dajing.offsetWidth + 'px';
		}

		if (e.offsetY * -(datu.clientHeight / xiaotu.clientHeight) + dajing.offsetHeight / 2 < -datu
			.clientHeight +
			dajing.offsetHeight) {
			datu.style.top = -datu.clientHeight + dajing.offsetHeight + 'px';
		}
	});
}
magnifiers();
/*--E 放大镜--*/


/*--S 图片懒加载--*/
function imglazy() {
	let imgsz = [];
	for (let j = 0; j < 3; j++) {
		imgsz[j] = document.createElement('img');
	}

	if (!'loading' in new Image()) {
		for (let i = 0; i < 3; i++) {
			imgsz[i].loading = 'lazy';
			imgsz[i].src = `uploads/banner${i+1}.jpg`;
			//-可以字符串的形式作为文本节点插入，保持布局格式，例如 `<div class="tupianjiazai w"></div>`
			document.getElementsByClassName('tupianjiazai')[0].append(imgsz[i]);
		}
	} else {
		let con = 0;
		imgsz.forEach(imjiedian => document.getElementsByClassName('tupianjiazai')[0].append(imjiedian));

		function callback(entries) {
			entries.forEach(item => {
				if (item.isIntersecting) {
					item.target.src = `uploads/banner${con+1}.jpg`;
					con++;
					guancha.unobserve(item.target);
				}
			});
		}
		let guancha = new IntersectionObserver(callback);
		imgsz.forEach(imgem => guancha.observe(imgem));
	}
}
imglazy();
/*--E 图片懒加载--*/


/*--S 渐变圆环进度条动画--*/
function gradientCircleProgress() {
	let jindu = document.getElementsByClassName('jindutiao')[0];
	let jishu = document.querySelector('.jindutiao>em');
	let connnn = 0;
	setInterval(() => {
		if (connnn === 101) {
			connnn = 1;
			jindu.style.backgroundImage =
				`linear-gradient(#fff,#fff),conic-gradient(rgba(255,0,0,.8) ${connnn}%,rgba(255,0,0,0) ${connnn}% 100%)`;
				
		} else {
			jindu.style.backgroundImage =
				`linear-gradient(#fff,#fff),conic-gradient(rgba(255,0,0,.8) ${connnn}%,rgba(255,0,0,0) ${connnn}% 100%)`;
			jishu.innerHTML = `${connnn}`; //-.firstChild.data、.firstChild.nodeValue等可以直接设置文本内容
			connnn++;
		}
	}, 100);
}
gradientCircleProgress();
/*--E 渐变圆环进度条动画--*/


/*--S 时钟--*/
/*--如果需要样式数字，使用数字精灵图，变换背景定位*/
/*--计时器或倒计时原理基本相同，每隔一秒调用一次定时器增加或减少秒数；暂停清除定时器，开始重置定时器*/

//封装时钟函数clockEncapsulation
function clockEncapsulation() {
	let dLocal, nYear, nMonth, nDate, nHours, nMinutes, nSeconds;
	let hoursspan = document.querySelector('.clock').querySelectorAll('.Hours>span');
	let minutesspan = document.querySelector('.clock').querySelectorAll('.Minutes>span');
	let secondsspan = document.querySelector('.clock').querySelectorAll('.Seconds>span');

	//获取当前时间的年、月、日、时、分、秒整数
	function fnGetDate() {
		//-调用date对象,每次调用都实时返回当前调用时间
		dLocal = new Date();
		//-获取当前年份
		nYear = dLocal.getFullYear();
		//-获取当前月份，月份是从0开始计数，所以需要加1才是正确的月份
		nMonth = dLocal.getMonth() + 1;
		//-获取当前日期
		nDate = dLocal.getDate();
		//-获取当前时
		nHours = dLocal.getHours();
		//-获取分钟
		nMinutes = dLocal.getMinutes();
		//-获取秒数
		nSeconds = dLocal.getSeconds();
	}

	//返回十进位数字（bit=0）或返回个位数字（bit=1），num为分解的时、分、秒整数
	function clockFormatting(bit, num) {
		//..声明一个返回结果
		let sResult = '';
		if (bit === 0) {
			sResult = Math.floor(num / 10);
		} else {
			if (num < 10) {
				sResult = '' + num;
			} else {
				sResult = num - Math.floor(num / 10) * 10 + '';
			}
		}
		return sResult;
	}

	//获取每一个当前时间数字，可以根据这个数字应用样式或者直接输出数字
	function fnFormathms() {
		hoursspan[0].firstChild.nodeValue = clockFormatting(0, nHours);
		hoursspan[1].firstChild.nodeValue = clockFormatting(1, nHours);
		minutesspan[0].firstChild.nodeValue = clockFormatting(0, nMinutes);
		minutesspan[1].firstChild.nodeValue = clockFormatting(1, nMinutes);
		secondsspan[0].firstChild.nodeValue = clockFormatting(0, nSeconds);
		secondsspan[1].firstChild.nodeValue = clockFormatting(1, nSeconds);
	}

	//每隔一秒调用一次更新时间
	setInterval(() => {
		fnGetDate();
		fnFormathms();
	}, 1000);
}

//调用封装函数clockEncapsulation
clockEncapsulation();
/*--E 时钟--*/
