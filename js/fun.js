
//翻页JS
var ow=document.querySelector("#wrapper");
var oc=document.querySelector("#content");
// 获取所有的页面
var op=document.querySelectorAll(".scene");
// var opNum=op.length;

// 一些基本的变量
// 获取页面高度
var oHeight=ow.offsetHeight;
// 获取点击时的Y坐标，结束拖动时的终点坐标，移动的距离
var startY,endY;
// 记录当前第几页的索引(默认是第一页)
var index=0;

// 给content绑定事件
// 关于touches，targetTouches等的区别：
// https://www.jianshu.com/p/5562ea676744
// clientX,pagesX的区别，前者只表示元素到body，即浏览器左上角的坐标，后者还会包含被卷去的距离
// for(var i=0;i<oscene.length;i++){
    oc.addEventListener("touchstart", function(e){
        // console.log(e.touches[0].clientY);
        startY=e.touches[0].clientY;
        // console.log(this);

    });
    oc.addEventListener("touchend", function(e){
        // console.log(e.touches[0].clientY);
        endY=e.changedTouches[0].clientY;
        // console.log(this);
        // 如果向下拖动，那么endY-starY是正数，则是上一张
        // 这里给的页数都是写死的，需要根据具体的页面来给参数，比如这里是5页
        if(endY-startY>5){
            index--;
            if(index<0){
                index=0;
            }
            console.log(1);
            // 要想让翻页速度变快点，在style.css的第55行代码中将transition: all 0.5s linear;的时间调快点
            oc.style.transform="translateY("+-index*innerHeight+"px)";

        }
        else if(endY-startY<-5){
            index++;
            if(index>4){
                index=4;
            }
            console.log(2);
            // oc.style.transform="translateY("+-index*innerHeight+"px)";
            oc.style.transform="translateY("+-index*innerHeight+"px)";
            

        }
        // 所有的翻页动画都应该是在翻页后进行，所以那些动画效果需要在翻页后动态添加
        // 如果是在当前页就添加动画
        if(index==2){
            // console.log("第三页");
            document.querySelector(".p3Top").className="p3Top p3Topdong";
            document.querySelector(".p3Text1").className="p3Text1 p3Text1Dong";
            document.querySelector(".p3Bot").className="p3Bot p3BotDong";
            document.querySelector(".p3Text2").className="p3Text2 p3Text2Dong";
        }else{
            // 否则就要移除添加的动画class
            document.querySelector(".p3Top").className="p3Top ";
            document.querySelector(".p3Text1").className="p3Text1 ";
            document.querySelector(".p3Bot").className="p3Bot ";
            document.querySelector(".p3Text2").className="p3Text2 ";
        }
        // 第4也动画
        if(index==3){
            // console.log("第三页");
            document.querySelector(".p4tudou").className="p4tudou p4tudouDong";
            document.querySelector(".p4hongdou").className="p4hongdou p4hongdouDong";
            document.querySelector(".p4maishui").className="p4maishui p4maishuiDong";
            document.querySelector(".p4Center").className="p4Center p4CenterDong";
            document.querySelector(".p4Bot").className="p4Bot p4BotDong";
        }else{
            // 否则就要移除添加的动画class
            document.querySelector(".p4tudou").className="p4tudou ";
            document.querySelector(".p4hongdou").className="p4hongdou ";
            document.querySelector(".p4maishui").className="p4maishui ";
            document.querySelector(".p4Center").className="p4Center ";
            document.querySelector(".p4Bot").className="p4Bot ";
        }

        // 其他需要翻到当前页再进行动画的，在这里添加if语句，就像上面写的代码那样，注意，在样式中已经将动画调用样式单独才会为xxxDong的命名形式

        if(index==4){
            console.log("最后一页");
            // 如果是最后一页了，则隐藏翻页按钮
            document.querySelector(".nextpage").style.display="none";
        }

    });

    // 第一页JS百分比代码
    // window.onclick();
    
    // document.body.click();
    (function(){
      var i=0;
      var p1text=document.getElementById("p1text");
      // 如果是第二页才开始播放音乐和显示音乐图标
      var music=document.querySelector("#music");
      var musicIco=document.querySelector(".musicIco");

      var timer=setInterval(function(){
        i+=2;
        if(i>=100){
          clearInterval(timer);
          // 当进度条为100%
          // 则进入到下一页
          setTimeout(function(){
            index=1;
            oc.style.transform="translateY("+-index*innerHeight+"px)";
            // 音樂图标加载进来后，如果音乐无法自动播放，则添加音效关闭的图标，否则开启播放
            // ，因为浏览器默认禁止自动播放，所以添加禁止播放图标
            musicIco.style.display = 'block';

            if(music.paused){
                musicIco.className="musicIco musicIcoOff";
                music.play();
            }

          },500); 
        }
        p1text.innerText=i+"%";

      },30);
      // 点击音乐图标时，让音乐在播放和暂停中切换
      musicIco.onclick=function(){
        if(music.paused){
            musicIco.className="musicIco";
            music.play();
        }else{
            musicIco.className="musicIco musicIcoOff";
            music.pause();
            
        }
      };
    })();

    // 其他页面的JS，看当前页面HTML代码下的script标签，没有写在fun.js中了
//}
