function pic() {

	var bgm= ['https://cdn.pixabay.com/photo/2015/01/28/23/35/hills-615429_960_720.jpg','https://cdn.pixabay.com/photo/2017/07/24/12/43/schrecksee-2534484__340.jpg','https://cdn.pixabay.com/photo/2018/02/02/17/29/nature-3125912__340.jpg','https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg','https://cdn.pixabay.com/photo/2018/04/16/16/16/sunset-3325080__340.jpg','https://cdn.pixabay.com/photo/2016/10/18/21/28/seljalandsfoss-1751463__340.jpg','https://cdn.pixabay.com/photo/2016/05/02/10/13/ship-1366926__340.jpg','https://cdn.pixabay.com/photo/2015/01/28/23/34/mountains-615428__340.jpg','https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821__340.jpg','https://cdn.pixabay.com/photo/2016/09/21/04/46/barley-field-1684052_960_720.jpg','https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014_960_720.jpg','https://cdn.pixabay.com/photo/2018/08/24/23/33/field-3629120__340.jpg','https://cdn.pixabay.com/photo/2016/10/22/17/46/mountains-1761292__340.jpg'];

$('.random_bg').css({
	'background':'url('+ bgm[Math.floor(Math.random()* bgm.length )]+')no-repeat',
	'background-position': '100% ',
	'background-size':'cover'
});
	// body...
}
// pic();

//  function pic() {
//             var bgm = ['https://cdn.pixabay.com/photo/2015/01/28/23/35/hills-615429_960_720.jpg',
//             'https://cdn.pixabay.com/photo/2017/07/24/12/43/schrecksee-2534484__340.jpg',
//             'https://cdn.pixabay.com/photo/2018/02/02/17/29/nature-3125912__340.jpg',
//             'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg',
//             'https://cdn.pixabay.com/photo/2018/04/16/16/16/sunset-3325080__340.jpg',
//             'https://cdn.pixabay.com/photo/2016/10/18/21/28/seljalandsfoss-1751463__340.jpg',
//             'https://cdn.pixabay.com/photo/2016/05/02/10/13/ship-1366926__340.jpg',
//             'https://cdn.pixabay.com/photo/2015/01/28/23/34/mountains-615428__340.jpg',
//             'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821__340.jpg',
//             'https://cdn.pixabay.com/photo/2016/09/21/04/46/barley-field-1684052_960_720.jpg',
//             'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014_960_720.jpg',
//             'https://cdn.pixabay.com/photo/2018/08/24/23/33/field-3629120__340.jpg',
//             'https://cdn.pixabay.com/photo/2016/10/22/17/46/mountains-1761292__340.jpg'];
//     $('.random_bg').css({
//         'background' :'url('+ bgm[Math.floor(Math.random() * bgm.length)] + ') no-repeat',
//         'background-position' : '100%',
//         'background-size' : 'cover'
//     });
// }
