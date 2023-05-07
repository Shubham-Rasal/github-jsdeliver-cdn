{/* <iframe src="https://www.youtube.com/embed/5qap5aO4i9A" width="560" height="315" frameborder="0" allowfullscreen></iframe> */}
// 

//embeded video

const adBanner = document.body.querySelector('.ad-banner');
console.log(adBanner);

const video = document.createElement('iframe');
video.src = 'https://www.youtube.com/embed/25zjPEMxwbk';
video.width = '560';
video.height = '315';
video.frameborder = '0';
video.allowfullscreen = 'true';
video.oncanplay = 'true';
adBanner.appendChild(video);