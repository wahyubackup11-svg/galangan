(function(){
    var script = {
 "backgroundPreloadEnabled": true,
 "children": [
  "this.MainViewer",
  "this.ThumbnailList_96C85140_9ACD_D28F_41DA_AEB5717EBF0E",
  "this.HTMLText_975BA4D8_9ACC_33BF_41B6_E382D41A8D4A",
  "this.MapViewer",
  "this.IconButton_DB947932_CBD5_721C_4181_10D28E6E6BBF",
  "this.IconButton_DD3B0FDD_CC2C_CE04_41CC_8A134CB1896A",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "mobileMipmappingEnabled": false,
 "id": "rootPlayer",
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "buttonToggleFullscreen": "this.IconButton_DB947932_CBD5_721C_4181_10D28E6E6BBF",
 "scripts": {
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "unregisterKey": function(key){  delete window[key]; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "getKey": function(key){  return window[key]; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "existsKey": function(key){  return key in window; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "registerKey": function(key, value){  window[key] = value; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } }
 },
 "paddingRight": 0,
 "start": "this.init(); this.syncPlaylists([this.ThumbnailList_96C85140_9ACD_D28F_41DA_AEB5717EBF0E_playlist,this.mainPlayList]); this.playList_D74E523D_CC37_5604_41C9_403851BE82A7.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_DB947932_CBD5_721C_4181_10D28E6E6BBF].forEach(function(component) { component.set('visible', false); }) }",
 "horizontalAlign": "left",
 "width": "100%",
 "minHeight": 20,
 "defaultVRPointer": "laser",
 "downloadEnabled": false,
 "scrollBarWidth": 10,
 "class": "Player",
 "contentOpaque": false,
 "minWidth": 20,
 "verticalAlign": "top",
 "layout": "absolute",
 "desktopMipmappingEnabled": false,
 "definitions": [{
 "hfovMax": 130,
 "label": "UTARA",
 "id": "panorama_820D06B4_887A_31E3_41C0_3B358CD61033",
 "overlays": [
  "this.overlay_C55F808D_CBD7_B204_41E2_7B6D59D53B18",
  "this.popup_DBC17A14_CBD7_5604_41E4_8E400827DB9B"
 ],
 "mapLocations": [
  {
   "map": "this.map_948045FF_9AD4_3D71_41D3_949F4AE5E20A",
   "x": 3861.91,
   "class": "PanoramaMapLocation",
   "y": 437.02,
   "angle": 180.67
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfovMin": "120%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "hfov": 360,
 "thumbnailUrl": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_t.jpg",
 "class": "Panorama"
},
{
 "borderRadius": 5,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "bodyPaddingRight": 0,
 "id": "window_DCFDE0FF_CC54_D204_41E3_DC0DFC7C3AFC",
 "bodyBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "center",
 "titlePaddingLeft": 5,
 "headerVerticalAlign": "middle",
 "minHeight": 20,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "bodyBackgroundOpacity": 0,
 "bodyPaddingTop": 0,
 "modal": true,
 "class": "Window",
 "verticalAlign": "middle",
 "minWidth": 20,
 "titleFontColor": "#000000",
 "veilColorRatios": [
  0,
  1
 ],
 "shadowSpread": 1,
 "title": "",
 "titleFontSize": "1.29vmin",
 "headerBackgroundColorDirection": "vertical",
 "backgroundColor": [],
 "closeButtonPressedIconLineWidth": 3,
 "bodyPaddingBottom": 0,
 "titleFontWeight": "normal",
 "borderSize": 0,
 "backgroundOpacity": 1,
 "headerBorderSize": 0,
 "closeButtonBackgroundColor": [],
 "veilOpacity": 0.4,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "shadow": true,
 "closeButtonPressedBackgroundColor": [],
 "footerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "titlePaddingTop": 5,
 "footerHeight": 5,
 "propagateClick": false,
 "headerPaddingRight": 0,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingRight": 5,
 "veilColorDirection": "horizontal",
 "children": [
  "this.container_D743C23B_CC37_560C_41E6_D9C76F4E3BB5"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "closeButtonIconHeight": 20,
 "titleFontStyle": "normal",
 "shadowColor": "#000000",
 "headerPaddingBottom": 5,
 "shadowVerticalLength": 0,
 "closeButtonIconColor": "#B2B2B2",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "headerBorderColor": "#000000",
 "scrollBarWidth": 10,
 "titleFontFamily": "Arial",
 "headerPaddingTop": 10,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "shadowBlurRadius": 6,
 "headerPaddingLeft": 10,
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "titleTextDecoration": "none",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonBackgroundColorRatios": [],
 "layout": "vertical",
 "gap": 10,
 "shadowHorizontalLength": 3,
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "bodyPaddingLeft": 0,
 "closeButtonRollOverBackgroundColor": [],
 "headerBackgroundOpacity": 0,
 "shadowOpacity": 0.5,
 "scrollBarOpacity": 0.5,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "paddingBottom": 0,
 "titlePaddingBottom": 5,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [],
 "closeButtonIconLineWidth": 2,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 20,
 "data": {
  "name": "Window14790"
 }
},
{
 "initialPosition": {
  "yaw": 0.25,
  "class": "PanoramaCameraPosition",
  "pitch": -40.2
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_camera",
 "automaticZoomSpeed": 10
},
{
 "rotationY": 0,
 "popupMaxHeight": "95%",
 "showDuration": 500,
 "pitch": -68.91,
 "showEasing": "cubic_in",
 "id": "popup_D9780108_CBD4_F20D_41E7_E2258CF0FDF7",
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_D9780108_CBD4_F20D_41E7_E2258CF0FDF7_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxWidth": "95%",
 "yaw": 0.34,
 "hfov": 5.35
},
{
 "hfovMax": 130,
 "label": "BARAT",
 "id": "panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4",
 "overlays": [
  "this.overlay_DA809F54_CBD5_4E04_41C0_3BC1488DB74A",
  "this.popup_C5754601_CBD5_71FC_41DF_4EAA1A0383AB"
 ],
 "mapLocations": [
  {
   "map": "this.map_948045FF_9AD4_3D71_41D3_949F4AE5E20A",
   "x": 2377.01,
   "class": "PanoramaMapLocation",
   "y": 2680.58,
   "angle": 95.11
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfovMin": "120%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "hfov": 360,
 "thumbnailUrl": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_t.jpg",
 "class": "Panorama"
},
{
 "items": [
  "this.PanoramaPlayListItem_D749F242_CC37_567D_41E6_5AD6FDFC2804",
  "this.PanoramaPlayListItem_D7496242_CC37_567D_41E6_2FCE8AFFA77B",
  "this.PanoramaPlayListItem_D748A242_CC37_567D_41E5_17416558122A",
  "this.PanoramaPlayListItem_D74BD242_CC37_567D_41CE_2A83171EE1C7",
  "this.PanoramaPlayListItem_D74B4242_CC37_567D_41C9_E3019C059BCA",
  {
   "media": "this.album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C",
   "class": "PhotoAlbumPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 0)",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "end": "this.trigger('tourEnded')"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "duration": 0,
 "height": 3508,
 "thumbnailUrl": "media/album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_1_t.jpg",
 "label": "PETA KESESUAIAN TATA RUANG",
 "id": "album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_1",
 "width": 4961,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_1.jpg"
   }
  ]
 }
},
{
 "class": "PlayList",
 "change": "this.showComponentsWhileMouseOver(this.container_D743C23B_CC37_560C_41E6_D9C76F4E3BB5, [this.htmltext_D743823B_CC37_560C_41E8_83D410D4C10E,this.component_D743223B_CC37_560C_41DB_0830CBF81C0D,this.component_D742C23B_CC37_560C_41D8_A7FC693F8CE7], 2000)",
 "items": [
  "this.albumitem_D741D23B_CC37_560C_41C1_4C8DE240FF04"
 ],
 "id": "playList_DD9FC87D_CC55_7204_41D2_98958008A79D"
},
{
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer"
},
{
 "viewerArea": "this.MapViewer",
 "id": "MapViewerMapPlayer",
 "class": "MapPlayer",
 "movementMode": "constrained"
},
{
 "duration": 0,
 "height": 2338,
 "thumbnailUrl": "media/photo_DB67CCDF_CC55_5204_41D6_D3626E1D7100_t.jpg",
 "label": "SITE PLAN",
 "id": "photo_DB67CCDF_CC55_5204_41D6_D3626E1D7100",
 "width": 3308,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_DB67CCDF_CC55_5204_41D6_D3626E1D7100.jpg"
   }
  ]
 }
},
{
 "initialPosition": {
  "yaw": -1.76,
  "class": "PanoramaCameraPosition",
  "pitch": -40.45
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_camera",
 "automaticZoomSpeed": 10
},
{
 "rotationY": 0,
 "popupMaxHeight": "95%",
 "showDuration": 500,
 "pitch": -33.9,
 "showEasing": "cubic_in",
 "id": "popup_DBC17A14_CBD7_5604_41E4_8E400827DB9B",
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_DBC17A14_CBD7_5604_41E4_8E400827DB9B_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxWidth": "95%",
 "yaw": -2.06,
 "hfov": 7.55
},
{
 "fieldOfViewOverlayRadiusScale": 0.14,
 "id": "map_948045FF_9AD4_3D71_41D3_949F4AE5E20A",
 "width": 8192,
 "label": "MAP FLOOR",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/map_948045FF_9AD4_3D71_41D3_949F4AE5E20A.jpeg",
    "width": 3200,
    "class": "ImageResourceLevel",
    "height": 1907
   },
   {
    "url": "media/map_948045FF_9AD4_3D71_41D3_949F4AE5E20A_lq.jpeg",
    "width": 331,
    "tags": "preload",
    "class": "ImageResourceLevel",
    "height": 198
   }
  ]
 },
 "overlays": [
  "this.overlay_97266B35_9AD4_56F1_41E0_5FEC6491E0E7",
  "this.overlay_8AA26D8D_9ADC_4D91_41C4_B242DE053430",
  "this.overlay_8A10C3E3_9ADC_5591_41D3_5727B8194571",
  "this.overlay_8A5672F0_9ADC_578F_41E1_8C1A9C619654",
  "this.overlay_8B108C64_9ADC_5297_41D5_141AEF8C1B24"
 ],
 "minimumZoomFactor": 0.5,
 "fieldOfViewOverlayOutsideColor": "#000000",
 "thumbnailUrl": "media/map_948045FF_9AD4_3D71_41D3_949F4AE5E20A_t.jpg",
 "scaleMode": "fit_inside",
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "maximumZoomFactor": 1.2,
 "initialZoomFactor": 1,
 "fieldOfViewOverlayOutsideOpacity": 0,
 "class": "Map",
 "height": 4883
},
{
 "duration": 0,
 "height": 3508,
 "thumbnailUrl": "media/album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_0_t.jpg",
 "label": "PETA FOTO UDARA",
 "id": "album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_0",
 "width": 4961,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_0.jpg"
   }
  ]
 }
},
{
 "duration": 0,
 "height": 3508,
 "thumbnailUrl": "media/album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_2_t.jpg",
 "label": "PETA KOORDINAT LAHAN",
 "id": "album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_2",
 "width": 4961,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_2.jpg"
   }
  ]
 }
},
{
 "viewerArea": "this.MainViewer",
 "class": "PanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "displayPlaybackBar": true,
 "mouseControlMode": "drag_acceleration"
},
{
 "thumbnailUrl": "media/album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_t.png",
 "label": "Photo Album PETA FOTO UDARA",
 "id": "album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C",
 "class": "PhotoAlbum",
 "playList": "this.album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_AlbumPlayList"
},
{
 "duration": 0,
 "height": 3508,
 "thumbnailUrl": "media/album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_3_t.jpg",
 "label": "PETA PENYESUAIAN KOORDINAT LAHAN",
 "id": "album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_3",
 "width": 4961,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_3.jpg"
   }
  ]
 }
},
{
 "levels": [
  {
   "url": "media/popup_DBFF6BBC_CBD4_D605_41D9_33411E3E0ACA_0_0.jpg",
   "width": 3840,
   "class": "ImageResourceLevel",
   "height": 2160
  },
  {
   "url": "media/popup_DBFF6BBC_CBD4_D605_41D9_33411E3E0ACA_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1152
  },
  {
   "url": "media/popup_DBFF6BBC_CBD4_D605_41D9_33411E3E0ACA_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_DBFF6BBC_CBD4_D605_41D9_33411E3E0ACA_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_DA648C9A_CBD3_520C_41E5_BACE6CBAA22E",
 "class": "ImageResource"
},
{
 "hfovMax": 130,
 "label": "SELATAN",
 "id": "panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D",
 "overlays": [
  "this.overlay_DB3490F5_CBCE_A786_41CA_8CED96A15FC1",
  "this.popup_DBFF6BBC_CBD4_D605_41D9_33411E3E0ACA"
 ],
 "mapLocations": [
  {
   "map": "this.map_948045FF_9AD4_3D71_41D3_949F4AE5E20A",
   "x": 3364.7,
   "class": "PanoramaMapLocation",
   "y": 4377.87,
   "angle": 2.56
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfovMin": "120%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "hfov": 360,
 "thumbnailUrl": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_t.jpg",
 "class": "Panorama"
},
{
 "initialPosition": {
  "yaw": 1.26,
  "class": "PanoramaCameraPosition",
  "pitch": -43.46
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_camera",
 "automaticZoomSpeed": 10
},
{
 "rotationY": 0,
 "popupMaxHeight": "95%",
 "showDuration": 500,
 "pitch": -33.9,
 "showEasing": "cubic_in",
 "id": "popup_C5A0377F_CBD7_5E04_41E2_FB816B6862BE",
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_C5A0377F_CBD7_5E04_41E2_FB816B6862BE_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxWidth": "95%",
 "yaw": -2.06,
 "hfov": 7.55
},
{
 "levels": [
  {
   "url": "media/popup_DBC17A14_CBD7_5604_41E4_8E400827DB9B_0_0.jpg",
   "width": 3840,
   "class": "ImageResourceLevel",
   "height": 2160
  },
  {
   "url": "media/popup_DBC17A14_CBD7_5604_41E4_8E400827DB9B_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1152
  },
  {
   "url": "media/popup_DBC17A14_CBD7_5604_41E4_8E400827DB9B_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_DBC17A14_CBD7_5604_41E4_8E400827DB9B_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_DA615C9A_CBD3_520C_41C8_B8F8C84AEA7E",
 "class": "ImageResource"
},
{
 "rotationY": 0,
 "popupMaxHeight": "95%",
 "showDuration": 500,
 "pitch": -33.49,
 "showEasing": "cubic_in",
 "id": "popup_C5754601_CBD5_71FC_41DF_4EAA1A0383AB",
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_C5754601_CBD5_71FC_41DF_4EAA1A0383AB_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxWidth": "95%",
 "yaw": 3.49,
 "hfov": 7.58
},
{
 "initialPosition": {
  "yaw": 0.75,
  "class": "PanoramaCameraPosition",
  "pitch": -30.9
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_820D06B4_887A_31E3_41C0_3B358CD61033_camera",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "label": "TENGAH",
 "id": "panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9",
 "overlays": [
  "this.overlay_C466AC2B_CBD5_520C_41E7_4F96E79A6EA2",
  "this.popup_D9780108_CBD4_F20D_41E7_E2258CF0FDF7"
 ],
 "mapLocations": [
  {
   "map": "this.map_948045FF_9AD4_3D71_41D3_949F4AE5E20A",
   "x": 4035.07,
   "class": "PanoramaMapLocation",
   "y": 2586.87,
   "angle": 0
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfovMin": "120%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "hfov": 360,
 "thumbnailUrl": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_t.jpg",
 "class": "Panorama"
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_948045FF_9AD4_3D71_41D3_949F4AE5E20A",
   "class": "MapPlayListItem",
   "player": "this.MapViewerMapPlayer"
  }
 ],
 "id": "playList_D74E523D_CC37_5604_41C9_403851BE82A7",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 0.25,
  "class": "PanoramaCameraPosition",
  "pitch": -63.56
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_camera",
 "automaticZoomSpeed": 10,
 "displayMovements": [
  {
   "duration": 1000,
   "easing": "linear",
   "class": "TargetRotationalCameraDisplayMovement"
  },
  {
   "targetPitch": -63.56,
   "duration": 3000,
   "easing": "cubic_in_out",
   "class": "TargetRotationalCameraDisplayMovement",
   "targetStereographicFactor": 0
  }
 ],
 "displayOriginPosition": {
  "stereographicFactor": 1,
  "yaw": 0.25,
  "class": "RotationalCameraDisplayPosition",
  "hfov": 165,
  "pitch": -90
 }
},
{
 "levels": [
  {
   "url": "media/popup_C5A0377F_CBD7_5E04_41E2_FB816B6862BE_0_0.jpg",
   "width": 3840,
   "class": "ImageResourceLevel",
   "height": 2160
  },
  {
   "url": "media/popup_C5A0377F_CBD7_5E04_41E2_FB816B6862BE_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1152
  },
  {
   "url": "media/popup_C5A0377F_CBD7_5E04_41E2_FB816B6862BE_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_C5A0377F_CBD7_5E04_41E2_FB816B6862BE_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_DA626C9A_CBD3_520C_41E5_09DF99C4D3E0",
 "class": "ImageResource"
},
{
 "hfovMax": 130,
 "label": "TIMUR",
 "id": "panorama_82F58ECA_887A_11A7_41C3_CC78280C5471",
 "overlays": [
  "this.overlay_C687AB0B_CBBA_5E90_41CB_C5B9F4E6304C",
  "this.popup_C5A0377F_CBD7_5E04_41E2_FB816B6862BE"
 ],
 "mapLocations": [
  {
   "map": "this.map_948045FF_9AD4_3D71_41D3_949F4AE5E20A",
   "x": 5342.82,
   "class": "PanoramaMapLocation",
   "y": 3084.91,
   "angle": -80.46
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfovMin": "120%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "hfov": 360,
 "thumbnailUrl": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_t.jpg",
 "class": "Panorama"
},
{
 "duration": 0,
 "height": 2338,
 "thumbnailUrl": "media/photo_DA23BB75_CC55_5607_41E4_F46F8ECFA2BE_t.jpg",
 "label": "SITE PLAN OVERLAY CITRA",
 "id": "photo_DA23BB75_CC55_5607_41E4_F46F8ECFA2BE",
 "width": 3308,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_DA23BB75_CC55_5607_41E4_F46F8ECFA2BE.jpg"
   }
  ]
 }
},
{
 "rotationY": 0,
 "popupMaxHeight": "95%",
 "showDuration": 500,
 "pitch": -33.49,
 "showEasing": "cubic_in",
 "id": "popup_DBFF6BBC_CBD4_D605_41D9_33411E3E0ACA",
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_DBFF6BBC_CBD4_D605_41D9_33411E3E0ACA_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxWidth": "95%",
 "yaw": 3.49,
 "hfov": 7.58
},
{
 "levels": [
  {
   "url": "media/popup_C5754601_CBD5_71FC_41DF_4EAA1A0383AB_0_0.jpg",
   "width": 3840,
   "class": "ImageResourceLevel",
   "height": 2160
  },
  {
   "url": "media/popup_C5754601_CBD5_71FC_41DF_4EAA1A0383AB_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1152
  },
  {
   "url": "media/popup_C5754601_CBD5_71FC_41DF_4EAA1A0383AB_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_C5754601_CBD5_71FC_41DF_4EAA1A0383AB_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_DA65CC99_CBD3_520C_41BE_F224120DA319",
 "class": "ImageResource"
},
{
 "items": [
  {
   "media": "this.panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_96C85140_9ACD_D28F_41DA_AEB5717EBF0E_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_camera"
  },
  {
   "media": "this.panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_96C85140_9ACD_D28F_41DA_AEB5717EBF0E_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_camera"
  },
  {
   "media": "this.panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_96C85140_9ACD_D28F_41DA_AEB5717EBF0E_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_camera"
  },
  {
   "media": "this.panorama_82F58ECA_887A_11A7_41C3_CC78280C5471",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_96C85140_9ACD_D28F_41DA_AEB5717EBF0E_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_camera"
  },
  {
   "media": "this.panorama_820D06B4_887A_31E3_41C0_3B358CD61033",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_96C85140_9ACD_D28F_41DA_AEB5717EBF0E_playlist, 4, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_820D06B4_887A_31E3_41C0_3B358CD61033_camera"
  }
 ],
 "id": "ThumbnailList_96C85140_9ACD_D28F_41DA_AEB5717EBF0E_playlist",
 "class": "PlayList"
},
{
 "duration": 0,
 "height": 3508,
 "thumbnailUrl": "media/album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_4_t.jpg",
 "label": "PETA SELISIH LAHAN DAN PERIZINAN",
 "id": "album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_4",
 "width": 4961,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_4.jpg"
   }
  ]
 }
},
{
 "levels": [
  {
   "url": "media/popup_D9780108_CBD4_F20D_41E7_E2258CF0FDF7_0_0.jpg",
   "width": 3840,
   "class": "ImageResourceLevel",
   "height": 2160
  },
  {
   "url": "media/popup_D9780108_CBD4_F20D_41E7_E2258CF0FDF7_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1152
  },
  {
   "url": "media/popup_D9780108_CBD4_F20D_41E7_E2258CF0FDF7_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_D9780108_CBD4_F20D_41E7_E2258CF0FDF7_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_DA7C0C89_CBD3_520C_41BF_8059A34C9CAC",
 "class": "ImageResource"
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_948045FF_9AD4_3D71_41D3_949F4AE5E20A",
   "class": "MapPlayListItem",
   "player": "this.MapViewerMapPlayer"
  }
 ],
 "id": "playList_D74E823D_CC37_5604_41E8_D239E993680E",
 "class": "PlayList"
},
{
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "progressBarBorderColor": "#000000",
 "id": "MainViewer",
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 5,
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "toolTipBorderColor": "#767676",
 "toolTipFontSize": "30px",
 "toolTipShadowBlurRadius": 3,
 "width": "100%",
 "minHeight": 50,
 "toolTipTextShadowColor": "#000000",
 "toolTipShadowSpread": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 4,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "class": "ViewerArea",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "minWidth": 100,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "playbackBarProgressBorderSize": 0,
 "borderSize": 0,
 "transitionDuration": 500,
 "playbackBarBorderRadius": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "shadow": false,
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "progressLeft": 0,
 "toolTipShadowVerticalLength": 0,
 "height": "100%",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipTextShadowOpacity": 0,
 "playbackBarBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "paddingRight": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "toolTipFontColor": "#333333",
 "playbackBarHeadShadowHorizontalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressRight": 0,
 "transitionMode": "blending",
 "progressBarBackgroundColorDirection": "vertical",
 "displayTooltipInTouchScreens": true,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "progressBottom": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "progressBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "toolTipBorderSize": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "paddingTop": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "paddingBottom": 0,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0
 ]
},
{
 "data": {
  "name": "ThumbnailList35762"
 },
 "id": "ThumbnailList_96C85140_9ACD_D28F_41DA_AEB5717EBF0E",
 "left": "0%",
 "scrollBarMargin": 2,
 "paddingLeft": 20,
 "paddingRight": 20,
 "itemLabelTextDecoration": "none",
 "horizontalAlign": "center",
 "borderRadius": 5,
 "itemPaddingRight": 3,
 "itemThumbnailShadowBlurRadius": 8,
 "itemBorderRadius": 0,
 "itemThumbnailHeight": 75,
 "itemLabelFontFamily": "Arial",
 "minHeight": 1,
 "itemThumbnailScaleMode": "fit_outside",
 "selectedItemLabelFontColor": "#FFCC00",
 "itemThumbnailShadowVerticalLength": 3,
 "scrollBarWidth": 10,
 "itemThumbnailShadowOpacity": 0.57,
 "itemLabelPosition": "bottom",
 "itemPaddingLeft": 3,
 "class": "ThumbnailList",
 "itemOpacity": 1,
 "width": "100%",
 "verticalAlign": "top",
 "bottom": "0%",
 "minWidth": 1,
 "playList": "this.ThumbnailList_96C85140_9ACD_D28F_41DA_AEB5717EBF0E_playlist",
 "itemHorizontalAlign": "center",
 "itemThumbnailBorderRadius": 5,
 "itemThumbnailShadowSpread": 1,
 "itemBackgroundColorDirection": "vertical",
 "height": 133.05,
 "itemLabelFontColor": "#FFFFFF",
 "itemBackgroundOpacity": 0,
 "itemLabelFontWeight": "normal",
 "gap": 13,
 "itemPaddingTop": 3,
 "backgroundOpacity": 0,
 "itemLabelFontSize": 14,
 "layout": "horizontal",
 "itemBackgroundColor": [],
 "selectedItemLabelFontWeight": "bold",
 "borderSize": 0,
 "itemThumbnailShadowHorizontalLength": 3,
 "itemLabelGap": 8,
 "itemThumbnailShadowColor": "#000000",
 "shadow": false,
 "paddingTop": 10,
 "scrollBarOpacity": 0.5,
 "itemThumbnailShadow": true,
 "scrollBarColor": "#FFFFFF",
 "itemThumbnailWidth": 100,
 "itemLabelFontStyle": "normal",
 "paddingBottom": 10,
 "itemBackgroundColorRatios": [],
 "itemThumbnailOpacity": 1,
 "itemLabelHorizontalAlign": "center",
 "rollOverItemLabelFontWeight": "bold",
 "itemMode": "normal",
 "itemPaddingBottom": 3,
 "propagateClick": false,
 "itemVerticalAlign": "middle",
 "scrollBarVisible": "rollOver"
},
{
 "scrollBarMargin": 2,
 "paddingLeft": 20,
 "id": "HTMLText_975BA4D8_9ACC_33BF_41B6_E382D41A8D4A",
 "right": "0.01%",
 "width": "23.162%",
 "paddingRight": 20,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "HTMLText",
 "top": "0%",
 "minWidth": 1,
 "height": "11.907%",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingTop": 20,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:right;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0000cc;font-size:27px;\"><B>FOTO UDARA 360 </B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:right;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:22px;\"><B>PT. GALANGAN LANCAR ABADI</B></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 20,
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "data": {
  "name": "HTMLText53815"
 },
 "scrollBarVisible": "rollOver"
},
{
 "data": {
  "name": "MapViewer"
 },
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBackgroundColorDirection": "vertical",
 "left": "0%",
 "paddingLeft": 0,
 "progressBarBorderColor": "#000000",
 "id": "MapViewer",
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 0,
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "toolTipBorderColor": "#767676",
 "toolTipFontSize": "30px",
 "toolTipShadowBlurRadius": 3,
 "width": "24.487%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "toolTipShadowSpread": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "minHeight": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 4,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "class": "ViewerArea",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "minWidth": 1,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "playbackBarProgressBorderSize": 0,
 "borderSize": 0,
 "transitionDuration": 500,
 "playbackBarBorderRadius": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "shadow": false,
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "progressLeft": 0,
 "toolTipShadowVerticalLength": 0,
 "height": "31.643%",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipTextShadowOpacity": 0,
 "playbackBarBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "paddingRight": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "toolTipFontColor": "#333333",
 "playbackBarHeadShadowHorizontalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressRight": 0,
 "transitionMode": "blending",
 "progressBarBackgroundColorDirection": "vertical",
 "displayTooltipInTouchScreens": true,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "top": "0%",
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "progressBottom": 2,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "progressBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "toolTipBorderSize": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "paddingTop": 0,
 "toolTipBorderRadius": 3,
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "paddingBottom": 0,
 "borderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0
 ]
},
{
 "maxHeight": 128,
 "id": "IconButton_DB947932_CBD5_721C_4181_10D28E6E6BBF",
 "paddingLeft": 0,
 "paddingRight": 0,
 "cursor": "hand",
 "right": "0.9%",
 "toolTipBackgroundColor": "#F6F6F6",
 "width": 81,
 "toolTipOpacity": 1,
 "toolTipBorderColor": "#767676",
 "toolTipFontColor": "#333333",
 "toolTipFontSize": "30px",
 "toolTipShadowBlurRadius": 3,
 "horizontalAlign": "center",
 "minHeight": 1,
 "toolTipTextShadowColor": "#000000",
 "toolTipShadowSpread": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTip": "Fullscreen",
 "toolTipPaddingBottom": 4,
 "class": "IconButton",
 "iconURL": "skin/IconButton_DB947932_CBD5_721C_4181_10D28E6E6BBF.png",
 "verticalAlign": "middle",
 "bottom": "1.98%",
 "minWidth": 1,
 "mode": "toggle",
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "toolTipPaddingRight": 6,
 "height": 66,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "borderSize": 0,
 "backgroundOpacity": 0,
 "toolTipDisplayTime": 600,
 "transparencyActive": true,
 "paddingTop": 0,
 "shadow": false,
 "toolTipBorderRadius": 3,
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "paddingBottom": 0,
 "borderRadius": 0,
 "toolTipShadowHorizontalLength": 0,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "maxWidth": 128,
 "data": {
  "name": "IconButton1493"
 }
},
{
 "maxHeight": 101,
 "id": "IconButton_DD3B0FDD_CC2C_CE04_41CC_8A134CB1896A",
 "paddingLeft": 0,
 "paddingRight": 0,
 "cursor": "hand",
 "right": "5.97%",
 "toolTipBackgroundColor": "#F6F6F6",
 "width": 98,
 "toolTipOpacity": 1,
 "toolTipBorderColor": "#767676",
 "toolTipFontColor": "#333333",
 "toolTipFontSize": "30px",
 "toolTipShadowBlurRadius": 3,
 "horizontalAlign": "center",
 "minHeight": 1,
 "toolTipTextShadowColor": "#000000",
 "toolTipShadowSpread": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTip": "Album Gambar",
 "toolTipPaddingBottom": 4,
 "class": "IconButton",
 "iconURL": "skin/IconButton_DD3B0FDD_CC2C_CE04_41CC_8A134CB1896A.png",
 "verticalAlign": "middle",
 "bottom": "1.54%",
 "minWidth": 1,
 "mode": "push",
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "click": "this.showPopupMedia(this.window_DCFDE0FF_CC54_D204_41E3_DC0DFC7C3AFC, this.album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C, this.playList_DD9FC87D_CC55_7204_41D2_98958008A79D, '90%', '90%', false, false)",
 "toolTipPaddingRight": 6,
 "height": 70,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "borderSize": 0,
 "backgroundOpacity": 0,
 "toolTipDisplayTime": 600,
 "transparencyActive": false,
 "paddingTop": 0,
 "shadow": false,
 "toolTipBorderRadius": 3,
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "paddingBottom": 0,
 "borderRadius": 0,
 "toolTipShadowHorizontalLength": 0,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "maxWidth": 101,
 "data": {
  "name": "IconButton12181"
 }
},
{
 "id": "veilPopupPanorama",
 "left": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": 0,
 "minHeight": 0,
 "backgroundColorDirection": "vertical",
 "class": "UIComponent",
 "top": 0,
 "bottom": 0,
 "minWidth": 0,
 "showEffect": {
  "duration": 350,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "backgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "backgroundOpacity": 0.55,
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "visible": false,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "data": {
  "name": "UIComponent20493"
 }
},
{
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": 0,
 "minHeight": 0,
 "backgroundColorDirection": "vertical",
 "class": "ZoomImage",
 "top": 0,
 "bottom": 0,
 "minWidth": 0,
 "backgroundColor": [],
 "borderSize": 0,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "shadow": false,
 "scaleMode": "custom",
 "paddingBottom": 0,
 "borderRadius": 0,
 "visible": false,
 "backgroundColorRatios": [],
 "propagateClick": false,
 "data": {
  "name": "ZoomImage20494"
 }
},
{
 "data": {
  "name": "CloseButton20495"
 },
 "id": "closeButtonPopupPanorama",
 "paddingLeft": 5,
 "paddingRight": 5,
 "fontFamily": "Arial",
 "right": 10,
 "horizontalAlign": "center",
 "shadowColor": "#000000",
 "iconHeight": 20,
 "minHeight": 0,
 "iconLineWidth": 5,
 "borderColor": "#000000",
 "iconColor": "#000000",
 "backgroundColorDirection": "vertical",
 "class": "CloseButton",
 "top": 10,
 "verticalAlign": "middle",
 "minWidth": 0,
 "pressedIconColor": "#888888",
 "showEffect": {
  "duration": 350,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "shadowSpread": 1,
 "mode": "push",
 "label": "",
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "borderSize": 0,
 "backgroundOpacity": 0.3,
 "fontStyle": "normal",
 "paddingTop": 5,
 "fontSize": "1.29vmin",
 "gap": 5,
 "shadow": false,
 "rollOverIconColor": "#666666",
 "shadowBlurRadius": 6,
 "paddingBottom": 5,
 "textDecoration": "none",
 "borderRadius": 0,
 "visible": false,
 "iconWidth": 20,
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "propagateClick": false,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -2.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0_HS_0_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -33.9,
   "hfov": 7.55
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.55,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0_HS_0_0.png",
      "width": 206,
      "class": "ImageResourceLevel",
      "height": 158
     }
    ]
   },
   "pitch": -33.9,
   "yaw": -2.06,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C55F808D_CBD7_B204_41E2_7B6D59D53B18",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Desain Rencana",
   "click": "this.showPopupPanoramaOverlay(this.popup_DBC17A14_CBD7_5604_41E4_8E400827DB9B, {'pressedIconColor':'#888888','rollOverIconColor':'#666666','pressedBorderSize':0,'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','rollOverIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'rollOverBorderSize':0,'paddingLeft':5,'paddingRight':5,'borderSize':0,'backgroundOpacity':0.3,'rollOverIconWidth':20,'pressedIconHeight':20,'paddingTop':5,'pressedIconLineWidth':5,'iconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','iconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBackgroundColorDirection':'vertical','rollOverIconHeight':20,'iconWidth':20,'pressedBackgroundColorDirection':'vertical','borderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3}, this.ImageResource_DA615C9A_CBD3_520C_41C8_B8F8C84AEA7E, null, null, null, null, false)"
  }
 ]
},
{
 "children": [
  "this.viewer_uidD741A235_CC37_5604_41E3_725B225F6C6E",
  {
   "children": [
    "this.htmltext_D743823B_CC37_560C_41E8_83D410D4C10E"
   ],
   "left": 0,
   "scrollBarMargin": 2,
   "scrollBarOpacity": 0.5,
   "paddingLeft": 0,
   "paddingRight": 0,
   "right": 0,
   "horizontalAlign": "left",
   "minHeight": 20,
   "backgroundColorDirection": "vertical",
   "scrollBarWidth": 7,
   "class": "Container",
   "contentOpaque": true,
   "bottom": 0,
   "minWidth": 20,
   "verticalAlign": "bottom",
   "layout": "vertical",
   "backgroundColor": [],
   "borderSize": 0,
   "backgroundOpacity": 0.3,
   "gap": 10,
   "paddingTop": 0,
   "overflow": "scroll",
   "scrollBarColor": "#FFFFFF",
   "height": "30%",
   "shadow": false,
   "paddingBottom": 0,
   "borderRadius": 0,
   "backgroundColorRatios": [],
   "propagateClick": false,
   "data": {
    "name": "Container20489"
   },
   "scrollBarVisible": "rollOver"
  },
  "this.component_D743223B_CC37_560C_41DB_0830CBF81C0D",
  "this.component_D742C23B_CC37_560C_41D8_A7FC693F8CE7"
 ],
 "id": "container_D743C23B_CC37_560C_41E6_D9C76F4E3BB5",
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "paddingRight": 0,
 "horizontalAlign": "left",
 "width": "100%",
 "minHeight": 20,
 "scrollBarWidth": 10,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "contentOpaque": false,
 "minWidth": 20,
 "verticalAlign": "top",
 "layout": "absolute",
 "backgroundColor": [],
 "borderSize": 0,
 "backgroundOpacity": 0.3,
 "gap": 10,
 "paddingTop": 0,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "height": "100%",
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "backgroundColorRatios": [],
 "propagateClick": false,
 "data": {
  "name": "Container20488"
 },
 "scrollBarVisible": "rollOver"
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 3.49,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0_HS_0_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -33.49,
   "hfov": 7.58
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.58,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0_HS_0_0.png",
      "width": 206,
      "class": "ImageResourceLevel",
      "height": 158
     }
    ]
   },
   "pitch": -33.49,
   "yaw": 3.49,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_DA809F54_CBD5_4E04_41C0_3BC1488DB74A",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Desain Rencana",
   "click": "this.showPopupPanoramaOverlay(this.popup_C5754601_CBD5_71FC_41DF_4EAA1A0383AB, {'pressedIconColor':'#888888','rollOverIconColor':'#666666','pressedBorderSize':0,'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','rollOverIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'rollOverBorderSize':0,'paddingLeft':5,'paddingRight':5,'borderSize':0,'backgroundOpacity':0.3,'rollOverIconWidth':20,'pressedIconHeight':20,'paddingTop':5,'pressedIconLineWidth':5,'iconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','iconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBackgroundColorDirection':'vertical','rollOverIconHeight':20,'iconWidth':20,'pressedBackgroundColorDirection':'vertical','borderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3}, this.ImageResource_DA65CC99_CBD3_520C_41BE_F224120DA319, null, null, null, null, false)"
  }
 ]
},
{
 "media": "this.panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_D749F242_CC37_567D_41E6_5AD6FDFC2804, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_D749F242_CC37_567D_41E6_5AD6FDFC2804",
 "camera": "this.panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_camera"
},
{
 "media": "this.panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_D7496242_CC37_567D_41E6_2FCE8AFFA77B, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 2)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_D7496242_CC37_567D_41E6_2FCE8AFFA77B",
 "camera": "this.panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_camera"
},
{
 "media": "this.panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_D748A242_CC37_567D_41E5_17416558122A, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 2, 3)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_D748A242_CC37_567D_41E5_17416558122A",
 "camera": "this.panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_camera"
},
{
 "media": "this.panorama_82F58ECA_887A_11A7_41C3_CC78280C5471",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_D74BD242_CC37_567D_41CE_2A83171EE1C7, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 3, 4)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_D74BD242_CC37_567D_41CE_2A83171EE1C7",
 "camera": "this.panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_camera"
},
{
 "media": "this.panorama_820D06B4_887A_31E3_41C0_3B358CD61033",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_D74B4242_CC37_567D_41C9_E3019C059BCA, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 4, 5)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_D74B4242_CC37_567D_41C9_E3019C059BCA",
 "camera": "this.panorama_820D06B4_887A_31E3_41C0_3B358CD61033_camera"
},
{
 "media": "this.album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C",
 "class": "PhotoAlbumPlayListItem",
 "begin": "this.updateMediaLabelFromPlayList(this.album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_AlbumPlayList, this.htmltext_D743823B_CC37_560C_41E8_83D410D4C10E, this.albumitem_D741D23B_CC37_560C_41C1_4C8DE240FF04); this.loopAlbum(this.playList_DD9FC87D_CC55_7204_41D2_98958008A79D, 0)",
 "player": "this.viewer_uidD741A235_CC37_5604_41E3_725B225F6C6EPhotoAlbumPlayer",
 "id": "albumitem_D741D23B_CC37_560C_41C1_4C8DE240FF04"
},
{
 "map": {
  "width": 386.99,
  "x": 3841.57,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_948045FF_9AD4_3D71_41D3_949F4AE5E20A_HS_0_map.gif",
     "width": 18,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 2419.98,
  "offsetY": 0,
  "height": 333.77,
  "offsetX": 0
 },
 "data": {
  "label": "Image"
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 3841.57,
  "y": 2419.98,
  "width": 386.99,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_948045FF_9AD4_3D71_41D3_949F4AE5E20A_HS_0.png",
     "width": 151,
     "class": "ImageResourceLevel",
     "height": 130
    }
   ]
  },
  "height": 333.77
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_97266B35_9AD4_56F1_41E0_5FEC6491E0E7",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ]
},
{
 "map": {
  "width": 386.99,
  "x": 2183.51,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_948045FF_9AD4_3D71_41D3_949F4AE5E20A_HS_1_map.gif",
     "width": 18,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 2513.69,
  "offsetY": 0,
  "height": 333.77,
  "offsetX": 0
 },
 "data": {
  "label": "Image"
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 2183.51,
  "y": 2513.69,
  "width": 386.99,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_948045FF_9AD4_3D71_41D3_949F4AE5E20A_HS_1.png",
     "width": 151,
     "class": "ImageResourceLevel",
     "height": 130
    }
   ]
  },
  "height": 333.77
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_8AA26D8D_9ADC_4D91_41C4_B242DE053430",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  }
 ]
},
{
 "map": {
  "width": 386.99,
  "x": 3668.42,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_948045FF_9AD4_3D71_41D3_949F4AE5E20A_HS_2_map.gif",
     "width": 18,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 270.14,
  "offsetY": 0,
  "height": 333.77,
  "offsetX": 0
 },
 "data": {
  "label": "Image"
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 3668.42,
  "y": 270.14,
  "width": 386.99,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_948045FF_9AD4_3D71_41D3_949F4AE5E20A_HS_2.png",
     "width": 151,
     "class": "ImageResourceLevel",
     "height": 130
    }
   ]
  },
  "height": 333.77
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_8A10C3E3_9ADC_5591_41D3_5727B8194571",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  }
 ]
},
{
 "map": {
  "width": 386.99,
  "x": 5149.33,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_948045FF_9AD4_3D71_41D3_949F4AE5E20A_HS_3_map.gif",
     "width": 18,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 2918.02,
  "offsetY": 0,
  "height": 333.77,
  "offsetX": 0
 },
 "data": {
  "label": "Image"
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 5149.33,
  "y": 2918.02,
  "width": 386.99,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_948045FF_9AD4_3D71_41D3_949F4AE5E20A_HS_3.png",
     "width": 151,
     "class": "ImageResourceLevel",
     "height": 130
    }
   ]
  },
  "height": 333.77
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_8A5672F0_9ADC_578F_41E1_8C1A9C619654",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  }
 ]
},
{
 "map": {
  "width": 386.99,
  "x": 3171.2,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_948045FF_9AD4_3D71_41D3_949F4AE5E20A_HS_4_map.gif",
     "width": 18,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 4210.98,
  "offsetY": 0,
  "height": 333.77,
  "offsetX": 0
 },
 "data": {
  "label": "Image"
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 3171.2,
  "y": 4210.98,
  "width": 386.99,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_948045FF_9AD4_3D71_41D3_949F4AE5E20A_HS_4.png",
     "width": 151,
     "class": "ImageResourceLevel",
     "height": 130
    }
   ]
  },
  "height": 333.77
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_8B108C64_9ADC_5297_41D5_141AEF8C1B24",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  }
 ]
},
{
 "items": [
  {
   "media": "this.album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_0",
   "class": "PhotoPlayListItem",
   "camera": {
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "duration": 0,
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.54",
     "zoomFactor": 1.37,
     "class": "PhotoCameraPosition",
     "y": "0.62"
    },
    "scaleMode": "fit_inside"
   }
  },
  {
   "media": "this.album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_1",
   "class": "PhotoPlayListItem",
   "camera": {
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "duration": 0,
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.60",
     "zoomFactor": 1.37,
     "class": "PhotoCameraPosition",
     "y": "0.41"
    },
    "scaleMode": "fit_inside"
   }
  },
  {
   "media": "this.album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_2",
   "class": "PhotoPlayListItem",
   "camera": {
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "duration": 0,
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.38",
     "zoomFactor": 1.37,
     "class": "PhotoCameraPosition",
     "y": "0.58"
    },
    "scaleMode": "fit_inside"
   }
  },
  {
   "media": "this.album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_3",
   "class": "PhotoPlayListItem",
   "camera": {
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "duration": 0,
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.31",
     "zoomFactor": 1.37,
     "class": "PhotoCameraPosition",
     "y": "0.40"
    },
    "scaleMode": "fit_inside"
   }
  },
  {
   "media": "this.album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_4",
   "class": "PhotoPlayListItem",
   "camera": {
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "duration": 0,
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.29",
     "zoomFactor": 1.37,
     "class": "PhotoCameraPosition",
     "y": "0.57"
    },
    "scaleMode": "fit_inside"
   }
  },
  {
   "media": "this.photo_DA23BB75_CC55_5607_41E4_F46F8ECFA2BE",
   "class": "PhotoPlayListItem",
   "camera": {
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "duration": 0,
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.73",
     "zoomFactor": 1.37,
     "class": "PhotoCameraPosition",
     "y": "0.29"
    },
    "scaleMode": "fit_inside"
   }
  },
  {
   "media": "this.photo_DB67CCDF_CC55_5204_41D6_D3626E1D7100",
   "class": "PhotoPlayListItem",
   "camera": {
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "duration": 0,
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.73",
     "zoomFactor": 1.37,
     "class": "PhotoCameraPosition",
     "y": "0.60"
    },
    "scaleMode": "fit_inside"
   }
  }
 ],
 "id": "album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 3.49,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0_HS_0_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -33.49,
   "hfov": 7.58
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.58,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0_HS_0_0.png",
      "width": 206,
      "class": "ImageResourceLevel",
      "height": 158
     }
    ]
   },
   "pitch": -33.49,
   "yaw": 3.49,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_DB3490F5_CBCE_A786_41CA_8CED96A15FC1",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Desain Rencana",
   "click": "this.showPopupPanoramaOverlay(this.popup_DBFF6BBC_CBD4_D605_41D9_33411E3E0ACA, {'pressedIconColor':'#888888','rollOverIconColor':'#666666','pressedBorderSize':0,'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','rollOverIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'rollOverBorderSize':0,'paddingLeft':5,'paddingRight':5,'borderSize':0,'backgroundOpacity':0.3,'rollOverIconWidth':20,'pressedIconHeight':20,'paddingTop':5,'pressedIconLineWidth':5,'iconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','iconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBackgroundColorDirection':'vertical','rollOverIconHeight':20,'iconWidth':20,'pressedBackgroundColorDirection':'vertical','borderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3}, this.ImageResource_DA648C9A_CBD3_520C_41E5_BACE6CBAA22E, null, null, null, null, false)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 0.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0_HS_0_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -68.91,
   "hfov": 5.35
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.35,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0_HS_0_0.png",
      "width": 338,
      "class": "ImageResourceLevel",
      "height": 238
     }
    ]
   },
   "pitch": -68.91,
   "yaw": 0.34,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C466AC2B_CBD5_520C_41E7_4F96E79A6EA2",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Desain Rencana",
   "click": "this.showPopupPanoramaOverlay(this.popup_D9780108_CBD4_F20D_41E7_E2258CF0FDF7, {'pressedIconColor':'#888888','rollOverIconColor':'#666666','pressedBorderSize':0,'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','rollOverIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'rollOverBorderSize':0,'paddingLeft':5,'paddingRight':5,'borderSize':0,'backgroundOpacity':0.3,'rollOverIconWidth':20,'pressedIconHeight':20,'paddingTop':5,'pressedIconLineWidth':5,'iconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','iconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBackgroundColorDirection':'vertical','rollOverIconHeight':20,'iconWidth':20,'pressedBackgroundColorDirection':'vertical','borderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3}, this.ImageResource_DA7C0C89_CBD3_520C_41BF_8059A34C9CAC, null, null, null, null, false)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -2.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0_HS_0_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -33.9,
   "hfov": 7.55
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.55,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0_HS_0_0.png",
      "width": 206,
      "class": "ImageResourceLevel",
      "height": 158
     }
    ]
   },
   "pitch": -33.9,
   "yaw": -2.06,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C687AB0B_CBBA_5E90_41CB_C5B9F4E6304C",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Desain Rencana",
   "click": "this.showPopupPanoramaOverlay(this.popup_C5A0377F_CBD7_5E04_41E2_FB816B6862BE, {'pressedIconColor':'#888888','rollOverIconColor':'#666666','pressedBorderSize':0,'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','rollOverIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'rollOverBorderSize':0,'paddingLeft':5,'paddingRight':5,'borderSize':0,'backgroundOpacity':0.3,'rollOverIconWidth':20,'pressedIconHeight':20,'paddingTop':5,'pressedIconLineWidth':5,'iconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','iconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBackgroundColorDirection':'vertical','rollOverIconHeight':20,'iconWidth':20,'pressedBackgroundColorDirection':'vertical','borderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3}, this.ImageResource_DA626C9A_CBD3_520C_41E5_09DF99C4D3E0, null, null, null, null, false)"
  }
 ]
},
{
 "data": {
  "name": "ViewerArea20487"
 },
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "progressBarBorderColor": "#000000",
 "id": "viewer_uidD741A235_CC37_5604_41E3_725B225F6C6E",
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 0,
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "toolTipBorderColor": "#767676",
 "toolTipFontSize": "1.11vmin",
 "toolTipShadowBlurRadius": 3,
 "width": "100%",
 "minHeight": 50,
 "toolTipTextShadowColor": "#000000",
 "toolTipShadowSpread": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 4,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "class": "ViewerArea",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "minWidth": 100,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "playbackBarProgressBorderSize": 0,
 "borderSize": 0,
 "transitionDuration": 500,
 "playbackBarBorderRadius": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "shadow": false,
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "progressLeft": 0,
 "toolTipShadowVerticalLength": 0,
 "height": "100%",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipTextShadowOpacity": 0,
 "playbackBarBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "paddingRight": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "toolTipFontColor": "#606060",
 "playbackBarHeadShadowHorizontalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressRight": 0,
 "transitionMode": "blending",
 "progressBarBackgroundColorDirection": "vertical",
 "displayTooltipInTouchScreens": true,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "progressBottom": 2,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "progressBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "toolTipBorderSize": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "paddingTop": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "paddingBottom": 0,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0
 ]
},
{
 "scrollBarMargin": 2,
 "paddingLeft": 10,
 "id": "htmltext_D743823B_CC37_560C_41E8_83D410D4C10E",
 "width": "100%",
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "backgroundColorDirection": "vertical",
 "class": "HTMLText",
 "hideEffect": {
  "duration": 250,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "minWidth": 0,
 "showEffect": {
  "duration": 250,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "backgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "backgroundOpacity": 0.7,
 "paddingTop": 5,
 "html": "",
 "scrollBarColor": "#000000",
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 5,
 "scrollBarOpacity": 0.5,
 "visible": false,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "data": {
  "name": "HTMLText20490"
 },
 "scrollBarVisible": "rollOver"
},
{
 "left": 10,
 "paddingLeft": 0,
 "id": "component_D743223B_CC37_560C_41DB_0830CBF81C0D",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "minHeight": 0,
 "class": "IconButton",
 "top": "45%",
 "iconURL": "skin/album_left.png",
 "verticalAlign": "middle",
 "showEffect": {
  "duration": 250,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "hideEffect": {
  "duration": 250,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "minWidth": 0,
 "mode": "push",
 "click": "this.loadFromCurrentMediaPlayList(this.album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_AlbumPlayList, -1)",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "visible": false,
 "propagateClick": false,
 "cursor": "hand",
 "data": {
  "name": "IconButton20491"
 }
},
{
 "paddingLeft": 0,
 "id": "component_D742C23B_CC37_560C_41D8_A7FC693F8CE7",
 "right": 10,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "minHeight": 0,
 "class": "IconButton",
 "top": "45%",
 "iconURL": "skin/album_right.png",
 "verticalAlign": "middle",
 "showEffect": {
  "duration": 250,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "hideEffect": {
  "duration": 250,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "minWidth": 0,
 "mode": "push",
 "click": "this.loadFromCurrentMediaPlayList(this.album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_AlbumPlayList, 1)",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "visible": false,
 "propagateClick": false,
 "cursor": "hand",
 "data": {
  "name": "IconButton20492"
 }
},
{
 "viewerArea": "this.viewer_uidD741A235_CC37_5604_41E3_725B225F6C6E",
 "id": "viewer_uidD741A235_CC37_5604_41E3_725B225F6C6EPhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer"
}],
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "overflow": "visible",
 "height": "100%",
 "shadow": false,
 "vrPolyfillScale": 0.5,
 "borderRadius": 0,
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "mouseWheelEnabled": true,
 "propagateClick": false,
 "data": {
  "name": "Player475"
 },
 "scrollBarVisible": "rollOver"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
