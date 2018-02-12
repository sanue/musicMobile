/**
 * Created by Administrator on 2016/8/24.
 */
 //轮播图
//轮播图
//轮播图
var curIndex=1;
function bannerChange(){
    setInterval('autoChange()' , 3000);

};

function autoChange(){
    if(curIndex<4){
        curIndex++;
    }else{
        curIndex=1;
    }
    $('#ad').attr('src' , 'newSongPic/ad0'+curIndex+'.jpg');
};


//初始化操作
function initEventHander() {
//titleclick
    $('.header>div').click(function () {
        $('.actived').removeClass('actived');
        $(this).addClass('actived');
    });
    $('.header>div:nth-child(1)').click(function () {
        $('.maintwo').hide();
        $('.mainthree').hide();
        $('#SingerIntroduce').hide();
        $('.main').show();
    });
    $('.header>div:nth-child(2)').click(function () {
        $('.main').hide();
        $('.mainthree').hide();
        $('#SingerIntroduce').hide();
        $('.maintwo').show();
    });
    $('.header>div:nth-child(3)').click(function () {
        $('.maintwo').hide();
        $('.main').hide();
        $('#SingerIntroduce').hide();
        $('.mainthree').show();
    })
    $('.cover').click(function(){
        $('.icon-th-list').click();
    })
    $('.icon-th-list').click(function () {
        $('.cover').toggle();
        $('.playlist').slideToggle();
    })
    $('#all').click(function(){
        $('.singersListContainer').html('');
        loadSingers();
    });
    //点击播放切换暂停
    $('#playit').click(function(){
        if($(this).hasClass('icon-play')){
            $(this).removeClass('icon-play').addClass('icon-pause');
            $('audio')[0].play();

        }else{
            $(this).addClass('icon-play').removeClass('icon-pause');
            $('audio')[0].pause();
        }
    });
    //返回
    $('#ret').click(function(){
        $('#SingerIntroduce').css('display','none');
        $('.mainthree').css('display','block');
    })
    //下一首歌
    $('.icon-fast-forward').click(function(){
        currentSongNum++;
        playNumSong(currentSongNum);

    })
}
//播放指定数字的歌
function playNumSong(currentSongNum){
    var mySongs = $('.songs');
    for(var i=0;i<mySongs.length;i++){
        if($($('.songs')[i]).children()[0].innerText==currentSongNum){
             var thisSong = $($('.songs')[i]).children()[1].innerText;
             var AllSongsList = JSON.parse(localStorage.songss);
             for(var j=0;j<AllSongsList.length;j++){
                 if(AllSongsList[j].name==thisSong){
                    var thisSong = AllSongsList[j];
                        playThisSong(thisSong);
                        HasThisSong(thisSong);
                        $('#playit').removeClass('icon-play').addClass('icon-pause');

                 }
             }
        }
    }
}

//动态加载ABC
function Abc(){
    var zimucontain = $('.zimu').html('');
    var data = 'A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z';
    var newdata = data.split(',');
    for(var j=0;j<newdata.length;j++){
        z = newdata[j];
        var zm = $('<div></div>').addClass('zm').text(z);
        zm.click(function(){
            var singerlist = JSON.parse(localStorage.singerss);
            $('.singersListContainer').html('');
            for(var i = 0;i<singerlist.length;i++){
                if($(this).text()==singerlist[i].pinyin.substring(0,1)){
                    $('.singersListContainer').append(createAllSingers(singerlist[i]));
                }
            }
        });
        zimucontain.append(zm);
    }
}
//判断是否列表里有这首歌
function HasThisSong(c){
    //判断local里是否有这首歌
            var myList = JSON.parse(localStorage.mySonglist|| '[]');
            var index = -1;
            for(var i =0 ;i<myList.length;i++){
                if(myList[i].name === c.name){
                    var index = i;
                    currentSongNum = i+1;
                    return;
                }
            }
            if(index = -1){
                var num = $('.songs').length+1;
                $('.songlist').append(addPlayerlist(c,num));
            }
}
//创建新歌快递歌手推荐
function createSongDataItem(c){
    var banner = $('<div></div>').addClass('banner');
    var pic = $('<img />').attr({'src':'icon/'+c.icon,'width':'45%','height':'45%'}).appendTo(banner);
    var h3 = $('<h3></h3>').text(c.title).appendTo(banner);
    pic.click(function(){
        playThisSong(c);
        HasThisSong(c);
        $('#playit').removeClass('icon-play').addClass('icon-pause');
    });
    return banner;
}
//更新播放器
function loadplayer(c){
$('#Tag')[0].style.left = 0 +'px';
    $('#songPic>img').attr('src','icon/'+ c.icon);
    $('#songName').text(c.singer.name +' '+ c.name);
    if($('#playit').hasClass('icon-play')){
        $('#playit').removeClass('icon-play').addClass('icon-pause');
    }else{
        $('#playit').addClass('icon-play').removeClass('icon-pause');
    }
}
//音乐馆
function createAllSongs(c){
    var singerList = $('<div></div>').addClass('songList');
    var singerPic = $('<div></div>').attr('id','singerPic').appendTo(singerList);
    $('<img />').attr('src','icon/'+c.icon).appendTo(singerPic);
    var singerInfo = $('<div></div>').attr('id','singerInfo').appendTo(singerList);
    $('<div></div>').attr('id','songslistName').text(c.name).appendTo(singerInfo);
    $('<div></div>').attr('id','singerlistName').text(c.singer.name).appendTo(singerInfo);
    var play = $('<div></div>').attr('id','play').appendTo(singerList);
    var iconPlay = $('<i></i>').addClass('icon-play').appendTo(play);
    iconPlay.click(function(){
        playThisSong(c);
        HasThisSong(c);
        $('#playit').removeClass('icon-play').addClass('icon-pause');

    });

    return singerList;
}
//播放这首歌
function playThisSong(c){
    $('audio')[0].src = 'res/' + c.res;
    $('audio')[0].play();
    //更新播放器
    loadplayer(c);
}
/************************************歌手****************************************/
//歌手
function createAllSingers(singers){
    var singerList = $('<div></div>').addClass('singerList');
    var singerPic =  $('<div></div>').attr('id','singerPic').appendTo(singerList);
    $('<img />').attr('src','icon/'+singers.icon).appendTo(singerPic);
    $('<div></div>').attr('id','singerName').text(singers.name).appendTo(singerList);
    $('<div></div>').attr('id','songNum').text(singers.songNum).appendTo(singerList);
    //点击歌手显示基本信息
    singerList.click(function(){
        var singerName = $(this)[0].children[1].innerText;
        //显示这个歌手基本信息
        showSingerInfo(singerName);
    })

    return singerList;
}
//点击歌手显示基本信息
function showSingerInfo(singerName){
    var singerInfo = JSON.parse(localStorage.singerss);
    //取出此歌手基本信息
    for(var i = 0;i<singerInfo.length;i++){
        if(singerName == singerInfo[i].name){
            var currentSingerInfo = singerInfo[i];
            $('#singerPlayList').html('');
            loadSingerInfo(currentSingerInfo);
        }
    }
}
//加载歌手个人信息
function loadSingerInfo(currentSingerInfo){
    $('.mainthree').css('display','none');
    $('#SingerIntroduce').css('display','block');
    var singerPic = currentSingerInfo.icon;
    var singerName = currentSingerInfo.name;
    $('#singerIntroPic')[0].children[2].src ='icon/'+ singerPic;
    $('#singerInfoName').text(singerName);
    var songsList = JSON.parse(localStorage.songss);
    for(var i=0;i<songsList.length;i++){
        if(songsList[i].singer.name==singerName){
            var currentSongList = songsList[i];
            var songsName = $('<div></div>').addClass('singerPlayListSongName').text(currentSongList.name).appendTo($('#singerPlayList'));
            var iconPlayIt = $('<i></i>').addClass('icon-play').attr('id','Listen').appendTo(songsName);
            iconPlayIt.click(function(){
                    var currentSong =$(this).parent().text();
                    for(var j = 0;j<songsList.length;j++){
                        if(songsList[j].name == currentSong){
                            var SongList = songsList[j];
                            playThisSong(SongList);
                            HasThisSong(SongList);
                            $('#playit').removeClass('icon-play').addClass('icon-pause');
        }
                    }



                });
        }
    }
}
/******************************新歌快递歌手推荐****************************************/
//新歌快递
function loadSongData(){
    if(undefined === localStorage.NewSong || JSON.parse(localStorage.NewSong).length == 0){
            var data = [
                {id:1,title:'五月的雪',name:'五月的雪',singer:{id:1 , name:'游鸿明'},icon:'wuyuedexue.jpg',res:'../res/wuyuedexue.mp3', duration:308},
                {id:2,title:'baby' ,name:'baby',singer:{id:1 , name:'贾斯汀'},icon:'baby.jpg',res:'../res/baby.mp3', duration:207},
                {id:3,title:'好久不见' ,name:'好久不见',singer:{id:1 , name:'陈奕迅'},icon:'haojiubujian.jpg',res:'../res/haojiubujian.mp3', duration:250},
                {id:4,title:'有个爱你的人不容易' ,name:'有个爱你的人不容易',singer:{id:1 , name:'那英'}, icon:'naying.jpg' ,res:'ygandrbry.mp3', duration:270}
            ];
            localStorage.NewSong = JSON.stringify(data);
        }
        var songList = JSON.parse(localStorage.NewSong);
        for(var i = 0 ; i < songList.length ;i++){
            //  构造显示单元
            var song = songList[i];
            //  加载到的容器中
            $('#picContain').append(createSongDataItem(song));
        }
}
//歌手推荐
function loadSingerData(){
    if(undefined === localStorage.NewSinger || JSON.parse(localStorage.NewSinger).length == 0){
            var data = [
                {id:1,title:'汪峰' ,name:'像梦一样自由',singer:{id:1 , name:'汪峰'},icon:'wangfeng.jpg',res:'../res/xiangmengxiang.mp3', duration:229},
                {id:2,title:'贾斯汀比伯' ,name:'baby',singer:{id:1 , name:'贾斯汀比伯'},icon:'baby.jpg',res:'../res/baby.mp3', duration:207},
                {id:3,title:'陈奕迅' ,name:'好久不见',singer:{id:1 , name:'陈奕迅'},icon:'chenyixun.jpg',res:'../res/haojiubujian.mp3', duration:250},
                {id:4,title:'那英' ,name:'有个爱你的人不容易',singer:{id:1 , name:'那英'}, icon:'naying.jpg' ,res:'ygandrbry.mp3',duration:270}
            ];
            localStorage.NewSinger = JSON.stringify(data);
        }
        var singerList = JSON.parse(localStorage.NewSinger);
        for(var i = 0 ; i < singerList.length ;i++){
            //  构造显示单元
            var song = singerList[i];
            //  加载到的容器中
            $('#singerContain').append(createSongDataItem(song));
        }
}
//Allsongs
function loadSongs(){
    var allSongslist = JSON.parse(localStorage.songss);
    for(var i =0 ;i<allSongslist.length;i++){
        $('.singerListContainer').append(createAllSongs(allSongslist[i]));
    }
}
//Allsingers
function loadSingers(){
    var allSingerslist = JSON.parse(localStorage.singerss);
    //把列表变成abcd依次显示的方式
    var currentList = showAsceng(allSingerslist);
    for(var i = 0;i<currentList.length;i++){
        $('.singersListContainer').append(createAllSingers(currentList[i]));
    }
}
//列表变成abcd依次显示的方式
function showAsceng(c){
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var currentList = [];
    for(var i=0;i< str.length;i++){
            var currentZM = str.substring(i,i+1);
        for(j=0;j<c.length;j++){
            var SZM = c[j].pinyin.substring(0,1);
            if(SZM == currentZM){
                currentList.push(c[j]);
            }
        }
    }
    return currentList;
}
/****************************我的列表********************************/
//加载我的列表
function loadmylist(){
    $('.songlist>div').remove();
     if(localStorage.mySonglist == undefined || JSON.parse(localStorage.mySonglist).length==0) {
         return;
     }else{
        var mylist = JSON.parse(localStorage.mySonglist);
        for(var i = 0;i<mylist.length;i++){
            var num = $('.songs').length+1;
            $('.songlist').append(createPlaylist(mylist[i],num));
        }     
    }
}
//添加到我的local播放列表
function addPlayerlist(c,num){
    if(localStorage.mySonglist === undefined || JSON.parse(localStorage.mySonglist).length==0){
            var mylist = [];
            mylist.push(c);
            localStorage.mySonglist = JSON.stringify(mylist);
            AddToMylist(c);
        }else{
            var myMusiclist = JSON.parse(localStorage.mySonglist);
            myMusiclist.push(c);
            localStorage.mySonglist = JSON.stringify(myMusiclist);
            AddToMylist(c);


    }
}
//加载到我的列表
function AddToMylist(c){
     var num = $('.songs').length+1;
     $('.songlist').append(createPlaylist(c,num));
     $('audio')[0].duration = c.duration;
     $('audio')[0].duration = c.duration;
}
//playlist
function createPlaylist(c,num){
    var songs = $('<div></div>').addClass('songs');
    $('<div></div>').attr('id','num').text(num).appendTo(songs);
    $('<div></div>').addClass('singerName').text(c.name).appendTo(songs);
    var dele = $('<div></div>').addClass('dele').appendTo(songs);
    $('<img/>').attr('src','images/dele.png').appendTo(dele);
    songs.click(function(){
        currentSongNum = $(this).children()[0].innerText;
        playThisSong(c);
        HasThisSong(c);
        $('#playit').removeClass('icon-play').addClass('icon-pause');
    })
    dele.click(function(){
        //删除数据
        var mylist = JSON.parse(localStorage.mySonglist);
        var index = $(this).parent().index();
        mylist.splice(index,1);
        localStorage.mySonglist = JSON.stringify(mylist);
		//删除
        songs.remove();
        getId();

    });

    return songs;
}
//遍历这个列表的序号
function getId(){
    var $rows = $('.songs');
    $rows.each(function(index,element){
        $(this)[0].children[0].innerText = index + 1;
    })
}
/*******************************进度条*********************************/
//播放器监听
function playerListen(){
    var ad = document.querySelector('audio');

    ad.addEventListener('timeupdate', function(e){
        /*document.querySelector('#currentTime').innerText = Math.floor(this.currentTime) + '秒';*/
        currentTime = Math.floor(this.currentTime);
        $('#blueline')[0].style.width = (16/this.duration)*currentTime + 'rem';
        $('#Tag')[0].style.left = (16/this.duration)*currentTime + 'rem';
    } , false);


}
/*********************************分页***********************************/
function showSongsPages(){
    $('.singerListContainer').each(function(){
        var pages = 7;
        var $children = $(this).children();
        if($children.length > pages){
            for(var i = pages;i < $children.length;i++){
                $children.eq(i).hide();
            };
            var lastChild = $(this).children()[$children.length-1];
        $("<div class='showMorehandle'>加载更多…</div>").insertAfter(lastChild).click(function () {
               if (showMoreNChildren($children, pages) <= 0) {
                   //如果目标元素已经没有隐藏的子元素了，就隐藏“点击更多的按钮条”
                   $(this).hide();
               };
           });
        }
    });
}
function showMoreNChildren($children,pages){
    //显示某jquery元素下的前n个隐藏的子元素
    var $hiddenChildren = $children.filter(":hidden");
    var cnt = $hiddenChildren.length;
    for ( var i = 0; i < pages && i < cnt ; i++) {
        $hiddenChildren.eq(i).show();
    }
    return cnt-pages;//返回还剩余的隐藏子元素的数量
}
/*****************自动循环播放**************/
function aotoPlay(){
    $('audio').bind('ended',function(){
            currentSongNum++;
            playNumSong(currentSongNum);
    	})
}
$(function () {
     //轮播
    bannerChange();
    //初始化操作
    initEventHander();
    //字母排序
    Abc();
    //新歌速递
    loadSongData();
    //歌手推荐
    loadSingerData();
    //音乐馆
    loadSongs();
    //loadsingers
    loadSingers();
    //加载我的列表
    loadmylist();
    //监听播放器
    playerListen();
    //分页
    showSongsPages();
    //自动循环播放
    aotoPlay();
 $('#line')[0].addEventListener('click', function(e){
            // 获取点击的位置
            var x = e.offsetX;
            //  设置进度条宽度
            var colWidth =  document.documentElement.clientWidth / 20;
             $('#blueline')[0].style.width  = x/colWidth +'rem';
            //

            $('#Tag')[0].style.left = x + 'px';
            var ad = document.querySelector('audio');
            ad.currentTime = Math.floor(ad.duration*(x/colWidth)/16);





 })
})