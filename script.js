(function(){
    var script = {
 "backgroundPreloadEnabled": true,
 "children": [
  "this.MainViewer",
  "this.ThumbnailList_96C85140_9ACD_D28F_41DA_AEB5717EBF0E",
  "this.MapViewer",
  "this.IconButton_DB947932_CBD5_721C_4181_10D28E6E6BBF",
  "this.IconButton_DD3B0FDD_CC2C_CE04_41CC_8A134CB1896A",
  "this.Image_CAE00CC7_DA20_59CF_41E6_248AF0EE22D0",
  "this.Container_F51F756A_E452_7E4E_41DE_877A0078152A",
  "this.Image_EA28C56E_E48B_9A40_41BE_46AD56800971",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "id": "rootPlayer",
 "mobileMipmappingEnabled": false,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "start": "this.init(); this.syncPlaylists([this.ThumbnailList_96C85140_9ACD_D28F_41DA_AEB5717EBF0E_playlist,this.mainPlayList]); this.playList_070AC5BB_120B_F107_4191_AAD2BC771B45.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_DB947932_CBD5_721C_4181_10D28E6E6BBF].forEach(function(component) { component.set('visible', false); }) }",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "class": "Player",
 "borderSize": 0,
 "vrPolyfillScale": 0.5,
 "width": "100%",
 "borderRadius": 0,
 "minHeight": 20,
 "horizontalAlign": "left",
 "propagateClick": false,
 "scripts": {
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "registerKey": function(key, value){  window[key] = value; },
  "unregisterKey": function(key){  delete window[key]; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "existsKey": function(key){  return key in window; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getKey": function(key){  return window[key]; }
 },
 "defaultVRPointer": "laser",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 20,
 "downloadEnabled": false,
 "buttonToggleFullscreen": "this.IconButton_DB947932_CBD5_721C_4181_10D28E6E6BBF",
 "verticalAlign": "top",
 "layout": "absolute",
 "paddingBottom": 0,
 "gap": 10,
 "shadow": false,
 "paddingTop": 0,
 "mouseWheelEnabled": true,
 "overflow": "visible",
 "scrollBarWidth": 10,
 "definitions": [{
 "viewerArea": "this.MainViewer",
 "class": "PhotoAlbumPlayer",
 "id": "MainViewerPhotoAlbumPlayer"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 7.58,
 "hideDuration": 500,
 "yaw": 3.49,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_02FCDC2B_1204_7706_41AD_5C88B3991E6C",
 "image": {
  "levels": [
   {
    "url": "media/popup_02FCDC2B_1204_7706_41AD_5C88B3991E6C_0_4.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -33.49,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "popupDistance": 100
},
{
 "duration": 0,
 "label": "PETA SELISIH LAHAN DAN PERIZINAN",
 "id": "album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_4",
 "thumbnailUrl": "media/album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_4_t.jpg",
 "width": 4961,
 "image": {
  "levels": [
   {
    "url": "media/album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_4.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 3508
},
{
 "shadowBlurRadius": 6,
 "shadowVerticalLength": 0,
 "id": "window_CE73AB68_DF6C_9721_41E7_82DE9F5DADF7",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "bodyPaddingRight": 0,
 "horizontalAlign": "center",
 "scrollBarVisible": "rollOver",
 "bodyBackgroundColorDirection": "vertical",
 "width": 400,
 "class": "Window",
 "shadowOpacity": 0.5,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 5,
 "minHeight": 20,
 "verticalAlign": "middle",
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "modal": true,
 "backgroundColorRatios": [],
 "shadowHorizontalLength": 3,
 "titlePaddingLeft": 5,
 "titleFontColor": "#000000",
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "height": 600,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontSize": "1.29vmin",
 "title": "",
 "headerBackgroundColorDirection": "vertical",
 "closeButtonPaddingTop": 0,
 "minWidth": 20,
 "bodyPaddingTop": 0,
 "closeButtonBorderColor": "#000000",
 "bodyPaddingBottom": 0,
 "closeButtonBackgroundColorDirection": "vertical",
 "backgroundColor": [],
 "headerBorderSize": 0,
 "veilColorDirection": "horizontal",
 "closeButtonPressedIconLineWidth": 3,
 "closeButtonBackgroundColor": [],
 "shadow": true,
 "titlePaddingTop": 5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "overflow": "scroll",
 "footerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColor": [],
 "headerPaddingRight": 0,
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "shadowSpread": 1,
 "footerBackgroundColorDirection": "vertical",
 "children": [
  "this.container_06FDA5AF_120B_F11E_4184_3ADBD20EFC77"
 ],
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "titlePaddingRight": 5,
 "closeButtonIconHeight": 20,
 "backgroundOpacity": 1,
 "bodyBorderSize": 0,
 "shadowColor": "#000000",
 "footerHeight": 5,
 "titleFontWeight": "normal",
 "paddingRight": 0,
 "titleFontFamily": "Arial",
 "titleFontStyle": "normal",
 "borderSize": 0,
 "headerPaddingBottom": 5,
 "propagateClick": false,
 "closeButtonIconColor": "#000000",
 "headerBorderColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonBackgroundOpacity": 1,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "contentOpaque": false,
 "closeButtonPaddingRight": 0,
 "scrollBarMargin": 2,
 "closeButtonPaddingLeft": 0,
 "closeButtonPaddingBottom": 0,
 "headerPaddingLeft": 10,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerPaddingTop": 10,
 "closeButtonBorderSize": 0,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "backgroundColorDirection": "vertical",
 "footerBorderColor": "#000000",
 "closeButtonBorderRadius": 11,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonBackgroundColorRatios": [],
 "layout": "vertical",
 "gap": 10,
 "headerBackgroundOpacity": 0,
 "titleTextDecoration": "none",
 "paddingBottom": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "bodyPaddingLeft": 0,
 "closeButtonRollOverBackgroundColor": [],
 "closeButtonIconLineWidth": 2,
 "titlePaddingBottom": 5,
 "bodyBorderColor": "#000000",
 "paddingTop": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "scrollBarWidth": 10,
 "closeButtonIconWidth": 20,
 "data": {
  "name": "Window4199"
 },
 "footerBorderSize": 0
},
{
 "class": "PlayList",
 "id": "ThumbnailList_96C85140_9ACD_D28F_41DA_AEB5717EBF0E_playlist",
 "items": [
  {
   "media": "this.panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9",
   "camera": "this.panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_96C85140_9ACD_D28F_41DA_AEB5717EBF0E_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4",
   "camera": "this.panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_96C85140_9ACD_D28F_41DA_AEB5717EBF0E_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D",
   "camera": "this.panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_96C85140_9ACD_D28F_41DA_AEB5717EBF0E_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_82F58ECA_887A_11A7_41C3_CC78280C5471",
   "camera": "this.panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_96C85140_9ACD_D28F_41DA_AEB5717EBF0E_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_820D06B4_887A_31E3_41C0_3B358CD61033",
   "camera": "this.panorama_820D06B4_887A_31E3_41C0_3B358CD61033_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_96C85140_9ACD_D28F_41DA_AEB5717EBF0E_playlist, 4, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ]
},
{
 "class": "PlayList",
 "id": "playList_070AC5BB_120B_F107_4191_AAD2BC771B45",
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_948045FF_9AD4_3D71_41D3_949F4AE5E20A",
   "class": "MapPlayListItem",
   "player": "this.MapViewerMapPlayer"
  }
 ]
},
{
 "hfovMin": "120%",
 "id": "panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9",
 "thumbnailUrl": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_t.jpg",
 "hfov": 360,
 "label": "TENGAH",
 "pitch": 0,
 "mapLocations": [
  {
   "map": "this.map_948045FF_9AD4_3D71_41D3_949F4AE5E20A",
   "x": 4035.07,
   "angle": 0,
   "y": 2586.87,
   "class": "PanoramaMapLocation"
  }
 ],
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_t.jpg"
  }
 ],
 "vfov": 180,
 "partial": false,
 "overlays": [
  "this.overlay_C466AC2B_CBD5_520C_41E7_4F96E79A6EA2",
  "this.popup_00D94ADE_11FC_133E_4165_FF5D85E78B7A"
 ]
},
{
 "duration": 0,
 "label": "PETA PENYESUAIAN KOORDINAT LAHAN",
 "id": "album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_3",
 "thumbnailUrl": "media/album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_3_t.jpg",
 "width": 4961,
 "image": {
  "levels": [
   {
    "url": "media/album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_3.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 3508
},
{
 "duration": 0,
 "label": "PETA KESESUAIAN TATA RUANG",
 "id": "album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_1",
 "thumbnailUrl": "media/album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_1_t.jpg",
 "width": 4961,
 "image": {
  "levels": [
   {
    "url": "media/album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_1.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 3508
},
{
 "class": "PlayList",
 "id": "mainPlayList",
 "items": [
  "this.PanoramaPlayListItem_0709D5BB_120B_F107_41B1_1AE644D0C9F0",
  "this.PanoramaPlayListItem_070935BB_120B_F107_41AE_6CB737E7BBD9",
  "this.PanoramaPlayListItem_0708A5BB_120B_F107_419C_8CCE7561654D",
  "this.PanoramaPlayListItem_070815BB_120B_F107_419E_910A2311EB41",
  "this.PanoramaPlayListItem_070F85BB_120B_F107_418B_B2D82A77428B",
  {
   "media": "this.album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 0)",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  }
 ]
},
{
 "hfovMin": "120%",
 "id": "panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4",
 "thumbnailUrl": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_t.jpg",
 "hfov": 360,
 "label": "BARAT",
 "pitch": 0,
 "mapLocations": [
  {
   "map": "this.map_948045FF_9AD4_3D71_41D3_949F4AE5E20A",
   "x": 2377.01,
   "angle": 95.11,
   "y": 2680.58,
   "class": "PanoramaMapLocation"
  }
 ],
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_t.jpg"
  }
 ],
 "vfov": 180,
 "partial": false,
 "overlays": [
  "this.overlay_DA809F54_CBD5_4E04_41C0_3BC1488DB74A",
  "this.popup_02FCDC2B_1204_7706_41AD_5C88B3991E6C"
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_04CC8877_1204_1F0E_41A7_9A4E4CE68198",
 "levels": [
  {
   "url": "media/popup_02442B44_1204_3101_416A_82554A561445_0_0.jpg",
   "width": 15360,
   "class": "ImageResourceLevel",
   "height": 8640
  },
  {
   "url": "media/popup_02442B44_1204_3101_416A_82554A561445_0_1.jpg",
   "width": 8192,
   "class": "ImageResourceLevel",
   "height": 4608
  },
  {
   "url": "media/popup_02442B44_1204_3101_416A_82554A561445_0_2.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2304
  },
  {
   "url": "media/popup_02442B44_1204_3101_416A_82554A561445_0_3.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1152
  },
  {
   "url": "media/popup_02442B44_1204_3101_416A_82554A561445_0_4.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_02442B44_1204_3101_416A_82554A561445_0_5.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ]
},
{
 "hfovMin": "120%",
 "id": "panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D",
 "thumbnailUrl": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_t.jpg",
 "hfov": 360,
 "label": "SELATAN",
 "pitch": 0,
 "mapLocations": [
  {
   "map": "this.map_948045FF_9AD4_3D71_41D3_949F4AE5E20A",
   "x": 3364.7,
   "angle": 2.56,
   "y": 4377.87,
   "class": "PanoramaMapLocation"
  }
 ],
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_t.jpg"
  }
 ],
 "vfov": 180,
 "partial": false,
 "overlays": [
  "this.overlay_DB3490F5_CBCE_A786_41CA_8CED96A15FC1",
  "this.popup_0269B1D5_1204_1102_41A6_4246359180C8"
 ]
},
{
 "fieldOfViewOverlayOutsideColor": "#000000",
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "id": "map_948045FF_9AD4_3D71_41D3_949F4AE5E20A",
 "minimumZoomFactor": 0.5,
 "width": 8192,
 "label": "MAP FLOOR",
 "image": {
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
    "class": "ImageResourceLevel",
    "height": 198,
    "tags": "preload"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Map",
 "thumbnailUrl": "media/map_948045FF_9AD4_3D71_41D3_949F4AE5E20A_t.jpg",
 "fieldOfViewOverlayRadiusScale": 0.14,
 "maximumZoomFactor": 1.2,
 "fieldOfViewOverlayOutsideOpacity": 0,
 "initialZoomFactor": 1,
 "scaleMode": "fit_inside",
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "height": 4883,
 "overlays": [
  "this.overlay_97266B35_9AD4_56F1_41E0_5FEC6491E0E7",
  "this.overlay_8AA26D8D_9ADC_4D91_41C4_B242DE053430",
  "this.overlay_8A10C3E3_9ADC_5591_41D3_5727B8194571",
  "this.overlay_8A5672F0_9ADC_578F_41E1_8C1A9C619654",
  "this.overlay_8B108C64_9ADC_5297_41D5_141AEF8C1B24"
 ]
},
{
 "duration": 0,
 "label": "PETA KOORDINAT LAHAN",
 "id": "album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_2",
 "thumbnailUrl": "media/album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_2_t.jpg",
 "width": 4961,
 "image": {
  "levels": [
   {
    "url": "media/album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_2.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 3508
},
{
 "displayOriginPosition": {
  "hfov": 165,
  "class": "RotationalCameraDisplayPosition",
  "yaw": 0.25,
  "stereographicFactor": 1,
  "pitch": -90
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_camera",
 "displayMovements": [
  {
   "duration": 1000,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "linear"
  },
  {
   "targetPitch": -63.56,
   "duration": 3000,
   "class": "TargetRotationalCameraDisplayMovement",
   "targetStereographicFactor": 0,
   "easing": "cubic_in_out"
  }
 ],
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0.25,
  "pitch": -63.56
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 1.26,
  "pitch": -43.46
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0.25,
  "pitch": -40.2
 }
},
{
 "class": "PlayList",
 "id": "playList_070AE5BB_120B_F107_41B0_34955E3AAF0E",
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_948045FF_9AD4_3D71_41D3_949F4AE5E20A",
   "class": "MapPlayListItem",
   "player": "this.MapViewerMapPlayer"
  }
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -1.76,
  "pitch": -40.45
 }
},
{
 "class": "ImageResource",
 "id": "ImageResource_04C85877_1204_1F0E_4181_BBA19617DDE5",
 "levels": [
  {
   "url": "media/popup_00D94ADE_11FC_133E_4165_FF5D85E78B7A_0_0.jpg",
   "width": 15360,
   "class": "ImageResourceLevel",
   "height": 8640
  },
  {
   "url": "media/popup_00D94ADE_11FC_133E_4165_FF5D85E78B7A_0_1.jpg",
   "width": 8192,
   "class": "ImageResourceLevel",
   "height": 4608
  },
  {
   "url": "media/popup_00D94ADE_11FC_133E_4165_FF5D85E78B7A_0_2.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2304
  },
  {
   "url": "media/popup_00D94ADE_11FC_133E_4165_FF5D85E78B7A_0_3.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1152
  },
  {
   "url": "media/popup_00D94ADE_11FC_133E_4165_FF5D85E78B7A_0_4.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_00D94ADE_11FC_133E_4165_FF5D85E78B7A_0_5.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 5.35,
 "hideDuration": 500,
 "yaw": 0.34,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_00D94ADE_11FC_133E_4165_FF5D85E78B7A",
 "image": {
  "levels": [
   {
    "url": "media/popup_00D94ADE_11FC_133E_4165_FF5D85E78B7A_0_4.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -68.91,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "popupDistance": 100
},
{
 "class": "ImageResource",
 "id": "ImageResource_04CB1877_1204_1F0E_41A6_D2EDE67E2905",
 "levels": [
  {
   "url": "media/popup_02FCDC2B_1204_7706_41AD_5C88B3991E6C_0_0.jpg",
   "width": 15360,
   "class": "ImageResourceLevel",
   "height": 8640
  },
  {
   "url": "media/popup_02FCDC2B_1204_7706_41AD_5C88B3991E6C_0_1.jpg",
   "width": 8192,
   "class": "ImageResourceLevel",
   "height": 4608
  },
  {
   "url": "media/popup_02FCDC2B_1204_7706_41AD_5C88B3991E6C_0_2.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2304
  },
  {
   "url": "media/popup_02FCDC2B_1204_7706_41AD_5C88B3991E6C_0_3.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1152
  },
  {
   "url": "media/popup_02FCDC2B_1204_7706_41AD_5C88B3991E6C_0_4.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_02FCDC2B_1204_7706_41AD_5C88B3991E6C_0_5.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_04CD2877_1204_1F0E_419D_C8184E3D45C8",
 "levels": [
  {
   "url": "media/popup_025B62F4_1204_7302_4190_F09822E035F3_0_0.jpg",
   "width": 15360,
   "class": "ImageResourceLevel",
   "height": 8640
  },
  {
   "url": "media/popup_025B62F4_1204_7302_4190_F09822E035F3_0_1.jpg",
   "width": 8192,
   "class": "ImageResourceLevel",
   "height": 4608
  },
  {
   "url": "media/popup_025B62F4_1204_7302_4190_F09822E035F3_0_2.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2304
  },
  {
   "url": "media/popup_025B62F4_1204_7302_4190_F09822E035F3_0_3.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1152
  },
  {
   "url": "media/popup_025B62F4_1204_7302_4190_F09822E035F3_0_4.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_025B62F4_1204_7302_4190_F09822E035F3_0_5.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ]
},
{
 "label": "Photo Album PETA FOTO UDARA",
 "id": "album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C",
 "thumbnailUrl": "media/album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_t.png",
 "playList": "this.album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_AlbumPlayList",
 "class": "PhotoAlbum"
},
{
 "viewerArea": "this.MainViewer",
 "displayPlaybackBar": true,
 "touchControlMode": "drag_rotation",
 "class": "PanoramaPlayer",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "mouseControlMode": "drag_acceleration"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 7.55,
 "hideDuration": 500,
 "yaw": -2.06,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_025B62F4_1204_7302_4190_F09822E035F3",
 "image": {
  "levels": [
   {
    "url": "media/popup_025B62F4_1204_7302_4190_F09822E035F3_0_4.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -33.9,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "popupDistance": 100
},
{
 "duration": 0,
 "label": "PETA FOTO UDARA",
 "id": "album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_0",
 "thumbnailUrl": "media/album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_0_t.jpg",
 "width": 4961,
 "image": {
  "levels": [
   {
    "url": "media/album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_0.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 3508
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 7.58,
 "hideDuration": 500,
 "yaw": 3.49,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_0269B1D5_1204_1102_41A6_4246359180C8",
 "image": {
  "levels": [
   {
    "url": "media/popup_0269B1D5_1204_1102_41A6_4246359180C8_0_4.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -33.49,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "popupDistance": 100
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_820D06B4_887A_31E3_41C0_3B358CD61033_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0.75,
  "pitch": -30.9
 }
},
{
 "class": "ImageResource",
 "id": "ImageResource_04CA1877_1204_1F0E_41B0_1A29446BA6AC",
 "levels": [
  {
   "url": "media/popup_0269B1D5_1204_1102_41A6_4246359180C8_0_0.jpg",
   "width": 15360,
   "class": "ImageResourceLevel",
   "height": 8640
  },
  {
   "url": "media/popup_0269B1D5_1204_1102_41A6_4246359180C8_0_1.jpg",
   "width": 8192,
   "class": "ImageResourceLevel",
   "height": 4608
  },
  {
   "url": "media/popup_0269B1D5_1204_1102_41A6_4246359180C8_0_2.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2304
  },
  {
   "url": "media/popup_0269B1D5_1204_1102_41A6_4246359180C8_0_3.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1152
  },
  {
   "url": "media/popup_0269B1D5_1204_1102_41A6_4246359180C8_0_4.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_0269B1D5_1204_1102_41A6_4246359180C8_0_5.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ]
},
{
 "viewerArea": "this.MapViewer",
 "class": "MapPlayer",
 "id": "MapViewerMapPlayer",
 "movementMode": "constrained"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 7.55,
 "hideDuration": 500,
 "yaw": -2.06,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_02442B44_1204_3101_416A_82554A561445",
 "image": {
  "levels": [
   {
    "url": "media/popup_02442B44_1204_3101_416A_82554A561445_0_4.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -33.9,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "popupDistance": 100
},
{
 "hfovMin": "120%",
 "id": "panorama_820D06B4_887A_31E3_41C0_3B358CD61033",
 "thumbnailUrl": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_t.jpg",
 "hfov": 360,
 "label": "UTARA",
 "pitch": 0,
 "mapLocations": [
  {
   "map": "this.map_948045FF_9AD4_3D71_41D3_949F4AE5E20A",
   "x": 3861.91,
   "angle": 180.67,
   "y": 437.02,
   "class": "PanoramaMapLocation"
  }
 ],
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_t.jpg"
  }
 ],
 "vfov": 180,
 "partial": false,
 "overlays": [
  "this.overlay_C55F808D_CBD7_B204_41E2_7B6D59D53B18",
  "this.popup_02442B44_1204_3101_416A_82554A561445"
 ]
},
{
 "hfovMin": "120%",
 "id": "panorama_82F58ECA_887A_11A7_41C3_CC78280C5471",
 "thumbnailUrl": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_t.jpg",
 "hfov": 360,
 "label": "TIMUR",
 "pitch": 0,
 "mapLocations": [
  {
   "map": "this.map_948045FF_9AD4_3D71_41D3_949F4AE5E20A",
   "x": 5342.82,
   "angle": -80.46,
   "y": 3084.91,
   "class": "PanoramaMapLocation"
  }
 ],
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_t.jpg"
  }
 ],
 "vfov": 180,
 "partial": false,
 "overlays": [
  "this.overlay_C687AB0B_CBBA_5E90_41CB_C5B9F4E6304C",
  "this.popup_025B62F4_1204_7302_4190_F09822E035F3"
 ]
},
{
 "change": "this.showComponentsWhileMouseOver(this.container_06FDA5AF_120B_F11E_4184_3ADBD20EFC77, [this.htmltext_0703B5AF_120B_F11E_41B0_6A77522FA219,this.component_0702E5AF_120B_F11E_419C_5A0D7A67F1FC,this.component_0702D5AF_120B_F11E_4170_71310C88CB3D], 2000)",
 "items": [
  "this.albumitem_06FF85AF_120B_F11E_41A1_A21BEF8BB71D"
 ],
 "class": "PlayList",
 "id": "playList_1FF3F7C5_11FC_1102_4185_B0A8F6157DE0"
},
{
 "transitionDuration": 500,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "MainViewer",
 "toolTipPaddingTop": 4,
 "paddingLeft": 0,
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "class": "ViewerArea",
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "width": "100%",
 "borderRadius": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "minHeight": 50,
 "toolTipBorderRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "progressBarBorderColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 5,
 "minWidth": 100,
 "playbackBarHeadOpacity": 1,
 "toolTipBorderColor": "#767676",
 "toolTipShadowSpread": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "toolTipFontSize": "30px",
 "height": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "shadow": false,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "borderSize": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowOpacity": 1,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "paddingBottom": 0,
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "paddingTop": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipFontColor": "#333333",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "itemThumbnailShadowColor": "#000000",
 "rollOverItemLabelFontWeight": "bold",
 "id": "ThumbnailList_96C85140_9ACD_D28F_41DA_AEB5717EBF0E",
 "left": "0%",
 "backgroundOpacity": 0,
 "paddingLeft": 20,
 "scrollBarColor": "#FFFFFF",
 "itemThumbnailWidth": 100,
 "paddingRight": 20,
 "itemLabelFontStyle": "normal",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "itemLabelHorizontalAlign": "center",
 "class": "ThumbnailList",
 "horizontalAlign": "center",
 "itemThumbnailOpacity": 1,
 "borderRadius": 5,
 "itemPaddingRight": 3,
 "selectedItemLabelFontWeight": "bold",
 "itemLabelFontWeight": "normal",
 "propagateClick": false,
 "minHeight": 1,
 "borderSize": 0,
 "itemThumbnailShadowHorizontalLength": 3,
 "playList": "this.ThumbnailList_96C85140_9ACD_D28F_41DA_AEB5717EBF0E_playlist",
 "itemLabelTextDecoration": "none",
 "itemBorderRadius": 0,
 "itemLabelFontFamily": "Arial",
 "width": "100%",
 "itemThumbnailShadowBlurRadius": 8,
 "bottom": "0%",
 "itemLabelFontSize": 14,
 "minWidth": 1,
 "itemThumbnailShadowVerticalLength": 3,
 "itemVerticalAlign": "middle",
 "itemThumbnailShadowOpacity": 0.57,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "height": 133.05,
 "itemPaddingLeft": 3,
 "itemLabelFontColor": "#FFFFFF",
 "itemMode": "normal",
 "itemThumbnailScaleMode": "fit_outside",
 "selectedItemLabelFontColor": "#FFCC00",
 "itemLabelPosition": "bottom",
 "layout": "horizontal",
 "itemBackgroundOpacity": 0,
 "gap": 13,
 "itemThumbnailHeight": 75,
 "itemOpacity": 1,
 "itemBackgroundColorDirection": "vertical",
 "paddingBottom": 10,
 "itemHorizontalAlign": "center",
 "itemThumbnailBorderRadius": 5,
 "itemThumbnailShadow": true,
 "paddingTop": 10,
 "shadow": false,
 "itemBackgroundColor": [],
 "itemPaddingBottom": 3,
 "itemLabelGap": 8,
 "data": {
  "name": "ThumbnailList35762"
 },
 "scrollBarWidth": 10,
 "itemBackgroundColorRatios": [],
 "itemPaddingTop": 3,
 "itemThumbnailShadowSpread": 1
},
{
 "transitionDuration": 500,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "MapViewer",
 "left": "0%",
 "toolTipPaddingTop": 4,
 "paddingLeft": 0,
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "class": "ViewerArea",
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "width": "24.487%",
 "borderRadius": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "toolTipBorderRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "progressBarBorderColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 0,
 "minWidth": 1,
 "playbackBarHeadOpacity": 1,
 "toolTipBorderColor": "#767676",
 "toolTipShadowSpread": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "toolTipFontSize": "30px",
 "height": "31.643%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "shadow": false,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "borderSize": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowOpacity": 1,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": "0%",
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "paddingBottom": 0,
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "paddingTop": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipFontColor": "#333333",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "MapViewer"
 }
},
{
 "transparencyActive": true,
 "maxHeight": 128,
 "toolTipShadowColor": "#333333",
 "toolTipShadowVerticalLength": 0,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "IconButton_DB947932_CBD5_721C_4181_10D28E6E6BBF",
 "backgroundOpacity": 0,
 "width": 48,
 "paddingRight": 0,
 "right": "4.96%",
 "toolTipPaddingTop": 4,
 "paddingLeft": 0,
 "class": "IconButton",
 "toolTipDisplayTime": 600,
 "toolTipFontStyle": "normal",
 "toolTipPaddingLeft": 6,
 "iconURL": "skin/IconButton_DB947932_CBD5_721C_4181_10D28E6E6BBF.png",
 "borderRadius": 0,
 "borderSize": 0,
 "toolTip": "Fullscreen",
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipBorderRadius": 3,
 "toolTipFontFamily": "Arial",
 "minHeight": 1,
 "bottom": "5.62%",
 "minWidth": 1,
 "toolTipBorderColor": "#767676",
 "mode": "toggle",
 "toolTipShadowSpread": 0,
 "toolTipOpacity": 1,
 "toolTipFontSize": "30px",
 "toolTipBackgroundColor": "#F6F6F6",
 "paddingBottom": 0,
 "toolTipShadowOpacity": 1,
 "toolTipShadowBlurRadius": 3,
 "toolTipTextShadowColor": "#000000",
 "height": 61.04,
 "shadow": false,
 "paddingTop": 0,
 "toolTipFontWeight": "normal",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "toolTipFontColor": "#333333",
 "cursor": "hand",
 "toolTipShadowHorizontalLength": 0,
 "maxWidth": 128,
 "data": {
  "name": "IconButton1493"
 }
},
{
 "transparencyActive": false,
 "maxHeight": 101,
 "toolTipShadowColor": "#333333",
 "toolTipShadowVerticalLength": 0,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "IconButton_DD3B0FDD_CC2C_CE04_41CC_8A134CB1896A",
 "backgroundOpacity": 0,
 "width": 70,
 "paddingRight": 0,
 "right": "17.5%",
 "toolTipPaddingTop": 4,
 "paddingLeft": 0,
 "class": "IconButton",
 "toolTipDisplayTime": 600,
 "toolTipFontStyle": "normal",
 "toolTipPaddingLeft": 6,
 "iconURL": "skin/IconButton_DD3B0FDD_CC2C_CE04_41CC_8A134CB1896A.png",
 "borderRadius": 0,
 "borderSize": 0,
 "toolTip": "Album Peta",
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipBorderRadius": 3,
 "toolTipFontFamily": "Arial",
 "minHeight": 1,
 "bottom": "4.85%",
 "minWidth": 1,
 "toolTipBorderColor": "#767676",
 "mode": "push",
 "toolTipShadowSpread": 0,
 "click": "this.showPopupMedia(this.window_CE73AB68_DF6C_9721_41E7_82DE9F5DADF7, this.album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C, this.playList_1FF3F7C5_11FC_1102_4185_B0A8F6157DE0, '90%', '90%', false, false)",
 "toolTipOpacity": 1,
 "toolTipFontSize": "30px",
 "toolTipBackgroundColor": "#F6F6F6",
 "paddingBottom": 0,
 "toolTipShadowOpacity": 1,
 "toolTipShadowBlurRadius": 3,
 "toolTipTextShadowColor": "#000000",
 "height": 70,
 "shadow": false,
 "paddingTop": 0,
 "toolTipFontWeight": "normal",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "toolTipFontColor": "#333333",
 "cursor": "hand",
 "toolTipShadowHorizontalLength": 0,
 "maxWidth": 101,
 "data": {
  "name": "IconButton12181"
 }
},
{
 "maxHeight": 101,
 "toolTipShadowColor": "#333333",
 "toolTipShadowVerticalLength": 0,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "Image_CAE00CC7_DA20_59CF_41E6_248AF0EE22D0",
 "backgroundOpacity": 0,
 "width": 70,
 "scaleMode": "fit_inside",
 "paddingRight": 0,
 "right": "10.74%",
 "toolTipPaddingTop": 4,
 "paddingLeft": 0,
 "class": "Image",
 "toolTipDisplayTime": 600,
 "toolTipFontStyle": "normal",
 "toolTipPaddingLeft": 6,
 "url": "skin/Image_CAE00CC7_DA20_59CF_41E6_248AF0EE22D0.png",
 "borderRadius": 0,
 "borderSize": 0,
 "toolTip": "Putar Video",
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipBorderRadius": 3,
 "toolTipFontFamily": "Arial",
 "minHeight": 1,
 "bottom": "4.63%",
 "minWidth": 1,
 "toolTipBorderColor": "#767676",
 "toolTipShadowSpread": 0,
 "click": "this.setComponentVisibility(this.Container_F51F756A_E452_7E4E_41DE_877A0078152A, true, 0, null, null, false)",
 "toolTipOpacity": 1,
 "toolTipFontSize": "30px",
 "toolTipBackgroundColor": "#F6F6F6",
 "paddingBottom": 0,
 "toolTipShadowOpacity": 1,
 "toolTipShadowBlurRadius": 3,
 "toolTipTextShadowColor": "#000000",
 "height": 70,
 "shadow": false,
 "paddingTop": 0,
 "toolTipFontWeight": "normal",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "toolTipFontColor": "#333333",
 "toolTipShadowHorizontalLength": 0,
 "maxWidth": 101,
 "data": {
  "name": "Image7438"
 }
},
{
 "children": [
  "this.WebFrame_F5389D50_E452_6E5A_41D3_A33765C58907",
  "this.Image_F5D7638F_E45E_DAC6_41DF_F72B0C65B898"
 ],
 "id": "Container_F51F756A_E452_7E4E_41DE_877A0078152A",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "right": "5.25%",
 "width": "84.318%",
 "borderRadius": 0,
 "horizontalAlign": "left",
 "propagateClick": false,
 "minHeight": 1,
 "borderSize": 0,
 "top": "6.35%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "gap": 10,
 "paddingBottom": 0,
 "paddingTop": 0,
 "height": "87.1%",
 "shadow": false,
 "visible": false,
 "data": {
  "name": "Container6886"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "maxHeight": 101,
 "id": "Image_EA28C56E_E48B_9A40_41BE_46AD56800971",
 "left": "72.2%",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scaleMode": "fit_inside",
 "paddingRight": 0,
 "right": "23.76%",
 "class": "Image",
 "url": "skin/Image_EA28C56E_E48B_9A40_41BE_46AD56800971.png",
 "borderRadius": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "minHeight": 1,
 "bottom": "4.96%",
 "minWidth": 1,
 "top": "87.54%",
 "click": "this.openLink('https://www.google.com/maps/d/edit?mid=1_nE_Q1P0oZejM9LpUIhwjDD_vbBR-UU&usp=sharing', '_blank')",
 "horizontalAlign": "center",
 "paddingBottom": 0,
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 101,
 "data": {
  "name": "Image1958"
 }
},
{
 "id": "veilPopupPanorama",
 "left": 0,
 "backgroundOpacity": 0.55,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": 0,
 "class": "UIComponent",
 "borderSize": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "top": 0,
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "bottom": 0,
 "minWidth": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000"
 ],
 "shadow": false,
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "UIComponent10783"
 }
},
{
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": 0,
 "class": "ZoomImage",
 "borderSize": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "propagateClick": false,
 "backgroundColorRatios": [],
 "top": 0,
 "bottom": 0,
 "minWidth": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "backgroundColor": [],
 "shadow": false,
 "paddingTop": 0,
 "visible": false,
 "scaleMode": "custom",
 "data": {
  "name": "ZoomImage10784"
 }
},
{
 "fontFamily": "Arial",
 "id": "closeButtonPopupPanorama",
 "rollOverIconColor": "#666666",
 "backgroundOpacity": 0.3,
 "paddingLeft": 5,
 "paddingRight": 5,
 "iconBeforeLabel": true,
 "right": 10,
 "class": "CloseButton",
 "borderRadius": 0,
 "borderSize": 0,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "propagateClick": false,
 "minHeight": 0,
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "top": 10,
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "iconColor": "#000000",
 "minWidth": 0,
 "iconLineWidth": 5,
 "mode": "push",
 "fontSize": "1.29vmin",
 "iconHeight": 20,
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "paddingBottom": 5,
 "label": "",
 "fontStyle": "normal",
 "pressedIconColor": "#888888",
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "gap": 5,
 "shadow": false,
 "paddingTop": 5,
 "iconWidth": 20,
 "visible": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "shadowBlurRadius": 6,
 "data": {
  "name": "CloseButton10785"
 },
 "shadowSpread": 1
},
{
 "children": [
  "this.viewer_uid06FFA5AF_120B_F11E_4199_51C708DAD980",
  {
   "children": [
    "this.htmltext_0703B5AF_120B_F11E_41B0_6A77522FA219"
   ],
   "horizontalAlign": "left",
   "left": 0,
   "backgroundOpacity": 0.3,
   "paddingLeft": 0,
   "scrollBarColor": "#FFFFFF",
   "paddingRight": 0,
   "scrollBarVisible": "rollOver",
   "right": 0,
   "scrollBarOpacity": 0.5,
   "class": "Container",
   "borderSize": 0,
   "borderRadius": 0,
   "minHeight": 20,
   "verticalAlign": "bottom",
   "propagateClick": false,
   "backgroundColorRatios": [],
   "bottom": 0,
   "contentOpaque": true,
   "minWidth": 20,
   "layout": "vertical",
   "scrollBarMargin": 2,
   "backgroundColorDirection": "vertical",
   "paddingBottom": 0,
   "backgroundColor": [],
   "gap": 10,
   "shadow": false,
   "paddingTop": 0,
   "overflow": "scroll",
   "scrollBarWidth": 7,
   "height": "30%",
   "data": {
    "name": "Container10779"
   }
  },
  "this.component_0702E5AF_120B_F11E_419C_5A0D7A67F1FC",
  "this.component_0702D5AF_120B_F11E_4170_71310C88CB3D"
 ],
 "id": "container_06FDA5AF_120B_F11E_4184_3ADBD20EFC77",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "borderSize": 0,
 "width": "100%",
 "borderRadius": 0,
 "minHeight": 20,
 "horizontalAlign": "left",
 "propagateClick": false,
 "backgroundColorRatios": [],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 20,
 "verticalAlign": "top",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "backgroundColor": [],
 "gap": 10,
 "shadow": false,
 "paddingTop": 0,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "height": "100%",
 "data": {
  "name": "Container10778"
 }
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.35,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0_HS_0_0.png",
      "width": 338,
      "class": "ImageResourceLevel",
      "height": 238
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -68.91,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 0.34
  }
 ],
 "id": "overlay_C466AC2B_CBD5_520C_41E7_4F96E79A6EA2",
 "maps": [
  {
   "hfov": 5.35,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.34,
   "image": {
    "levels": [
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0_HS_0_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -68.91
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_00D94ADE_11FC_133E_4165_FF5D85E78B7A, {'iconLineWidth':5,'pressedBorderSize':0,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedIconHeight':20,'backgroundOpacity':0.3,'paddingLeft':5,'backgroundColorDirection':'vertical','rollOverIconWidth':20,'paddingBottom':5,'rollOverIconHeight':20,'borderSize':0,'rollOverBackgroundOpacity':0.3,'paddingTop':5,'iconHeight':20,'paddingRight':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','iconColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','borderColor':'#000000','pressedIconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_04C85877_1204_1F0E_4181_BBA19617DDE5, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "media": "this.panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9",
 "camera": "this.panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_0709D5BB_120B_F107_41B1_1AE644D0C9F0, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1)",
 "player": "this.MainViewerPanoramaPlayer",
 "class": "PanoramaPlayListItem",
 "id": "PanoramaPlayListItem_0709D5BB_120B_F107_41B1_1AE644D0C9F0"
},
{
 "media": "this.panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4",
 "camera": "this.panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_070935BB_120B_F107_41AE_6CB737E7BBD9, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 2)",
 "player": "this.MainViewerPanoramaPlayer",
 "class": "PanoramaPlayListItem",
 "id": "PanoramaPlayListItem_070935BB_120B_F107_41AE_6CB737E7BBD9"
},
{
 "media": "this.panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D",
 "camera": "this.panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_0708A5BB_120B_F107_419C_8CCE7561654D, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 2, 3)",
 "player": "this.MainViewerPanoramaPlayer",
 "class": "PanoramaPlayListItem",
 "id": "PanoramaPlayListItem_0708A5BB_120B_F107_419C_8CCE7561654D"
},
{
 "media": "this.panorama_82F58ECA_887A_11A7_41C3_CC78280C5471",
 "camera": "this.panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_070815BB_120B_F107_419E_910A2311EB41, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 3, 4)",
 "player": "this.MainViewerPanoramaPlayer",
 "class": "PanoramaPlayListItem",
 "id": "PanoramaPlayListItem_070815BB_120B_F107_419E_910A2311EB41"
},
{
 "media": "this.panorama_820D06B4_887A_31E3_41C0_3B358CD61033",
 "camera": "this.panorama_820D06B4_887A_31E3_41C0_3B358CD61033_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_070F85BB_120B_F107_418B_B2D82A77428B, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 4, 5)",
 "player": "this.MainViewerPanoramaPlayer",
 "class": "PanoramaPlayListItem",
 "id": "PanoramaPlayListItem_070F85BB_120B_F107_418B_B2D82A77428B"
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.58,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0_HS_0_0.png",
      "width": 206,
      "class": "ImageResourceLevel",
      "height": 158
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -33.49,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 3.49
  }
 ],
 "id": "overlay_DA809F54_CBD5_4E04_41C0_3BC1488DB74A",
 "maps": [
  {
   "hfov": 7.58,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 3.49,
   "image": {
    "levels": [
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0_HS_0_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -33.49
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_02FCDC2B_1204_7706_41AD_5C88B3991E6C, {'iconLineWidth':5,'pressedBorderSize':0,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedIconHeight':20,'backgroundOpacity':0.3,'paddingLeft':5,'backgroundColorDirection':'vertical','rollOverIconWidth':20,'paddingBottom':5,'rollOverIconHeight':20,'borderSize':0,'rollOverBackgroundOpacity':0.3,'paddingTop':5,'iconHeight':20,'paddingRight':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','iconColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','borderColor':'#000000','pressedIconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_04CB1877_1204_1F0E_41A6_D2EDE67E2905, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.58,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0_HS_0_0.png",
      "width": 206,
      "class": "ImageResourceLevel",
      "height": 158
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -33.49,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 3.49
  }
 ],
 "id": "overlay_DB3490F5_CBCE_A786_41CA_8CED96A15FC1",
 "maps": [
  {
   "hfov": 7.58,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 3.49,
   "image": {
    "levels": [
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0_HS_0_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -33.49
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_0269B1D5_1204_1102_41A6_4246359180C8, {'iconLineWidth':5,'pressedBorderSize':0,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedIconHeight':20,'backgroundOpacity':0.3,'paddingLeft':5,'backgroundColorDirection':'vertical','rollOverIconWidth':20,'paddingBottom':5,'rollOverIconHeight':20,'borderSize':0,'rollOverBackgroundOpacity':0.3,'paddingTop':5,'iconHeight':20,'paddingRight':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','iconColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','borderColor':'#000000','pressedIconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_04CA1877_1204_1F0E_41B0_1A29446BA6AC, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "map": {
  "width": 386.99,
  "x": 3841.57,
  "image": {
   "levels": [
    {
     "url": "media/map_948045FF_9AD4_3D71_41D3_949F4AE5E20A_HS_0_map.gif",
     "width": 18,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 2419.98,
  "class": "HotspotMapOverlayMap",
  "offsetY": 0,
  "height": 333.77,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "image": {
  "x": 3841.57,
  "height": 333.77,
  "y": 2419.98,
  "width": 386.99,
  "image": {
   "levels": [
    {
     "url": "media/map_948045FF_9AD4_3D71_41D3_949F4AE5E20A_HS_0.png",
     "width": 151,
     "class": "ImageResourceLevel",
     "height": 130
    }
   ],
   "class": "ImageResource"
  },
  "class": "HotspotMapOverlayImage"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_97266B35_9AD4_56F1_41E0_5FEC6491E0E7",
 "data": {
  "label": "Image"
 }
},
{
 "map": {
  "width": 386.99,
  "x": 2183.51,
  "image": {
   "levels": [
    {
     "url": "media/map_948045FF_9AD4_3D71_41D3_949F4AE5E20A_HS_1_map.gif",
     "width": 18,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 2513.69,
  "class": "HotspotMapOverlayMap",
  "offsetY": 0,
  "height": 333.77,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "image": {
  "x": 2183.51,
  "height": 333.77,
  "y": 2513.69,
  "width": 386.99,
  "image": {
   "levels": [
    {
     "url": "media/map_948045FF_9AD4_3D71_41D3_949F4AE5E20A_HS_1.png",
     "width": 151,
     "class": "ImageResourceLevel",
     "height": 130
    }
   ],
   "class": "ImageResource"
  },
  "class": "HotspotMapOverlayImage"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_8AA26D8D_9ADC_4D91_41C4_B242DE053430",
 "data": {
  "label": "Image"
 }
},
{
 "map": {
  "width": 386.99,
  "x": 3668.42,
  "image": {
   "levels": [
    {
     "url": "media/map_948045FF_9AD4_3D71_41D3_949F4AE5E20A_HS_2_map.gif",
     "width": 18,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 270.14,
  "class": "HotspotMapOverlayMap",
  "offsetY": 0,
  "height": 333.77,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "image": {
  "x": 3668.42,
  "height": 333.77,
  "y": 270.14,
  "width": 386.99,
  "image": {
   "levels": [
    {
     "url": "media/map_948045FF_9AD4_3D71_41D3_949F4AE5E20A_HS_2.png",
     "width": 151,
     "class": "ImageResourceLevel",
     "height": 130
    }
   ],
   "class": "ImageResource"
  },
  "class": "HotspotMapOverlayImage"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_8A10C3E3_9ADC_5591_41D3_5727B8194571",
 "data": {
  "label": "Image"
 }
},
{
 "map": {
  "width": 386.99,
  "x": 5149.33,
  "image": {
   "levels": [
    {
     "url": "media/map_948045FF_9AD4_3D71_41D3_949F4AE5E20A_HS_3_map.gif",
     "width": 18,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 2918.02,
  "class": "HotspotMapOverlayMap",
  "offsetY": 0,
  "height": 333.77,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "image": {
  "x": 5149.33,
  "height": 333.77,
  "y": 2918.02,
  "width": 386.99,
  "image": {
   "levels": [
    {
     "url": "media/map_948045FF_9AD4_3D71_41D3_949F4AE5E20A_HS_3.png",
     "width": 151,
     "class": "ImageResourceLevel",
     "height": 130
    }
   ],
   "class": "ImageResource"
  },
  "class": "HotspotMapOverlayImage"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_8A5672F0_9ADC_578F_41E1_8C1A9C619654",
 "data": {
  "label": "Image"
 }
},
{
 "map": {
  "width": 386.99,
  "x": 3171.2,
  "image": {
   "levels": [
    {
     "url": "media/map_948045FF_9AD4_3D71_41D3_949F4AE5E20A_HS_4_map.gif",
     "width": 18,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 4210.98,
  "class": "HotspotMapOverlayMap",
  "offsetY": 0,
  "height": 333.77,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "image": {
  "x": 3171.2,
  "height": 333.77,
  "y": 4210.98,
  "width": 386.99,
  "image": {
   "levels": [
    {
     "url": "media/map_948045FF_9AD4_3D71_41D3_949F4AE5E20A_HS_4.png",
     "width": 151,
     "class": "ImageResourceLevel",
     "height": 130
    }
   ],
   "class": "ImageResource"
  },
  "class": "HotspotMapOverlayImage"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_8B108C64_9ADC_5297_41D5_141AEF8C1B24",
 "data": {
  "label": "Image"
 }
},
{
 "class": "PhotoPlayList",
 "id": "album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_AlbumPlayList",
 "items": [
  {
   "camera": {
    "duration": 0,
    "easing": "linear",
    "targetPosition": {
     "x": "0.47",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.5,
     "y": "0.40"
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside"
   },
   "media": "this.album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_0",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 0,
    "easing": "linear",
    "targetPosition": {
     "x": "0.34",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.5,
     "y": "0.73"
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside"
   },
   "media": "this.album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_1",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 0,
    "easing": "linear",
    "targetPosition": {
     "x": "0.36",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.5,
     "y": "0.28"
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside"
   },
   "media": "this.album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_2",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 0,
    "easing": "linear",
    "targetPosition": {
     "x": "0.40",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.5,
     "y": "0.60"
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside"
   },
   "media": "this.album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_3",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 0,
    "easing": "linear",
    "targetPosition": {
     "x": "0.42",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.5,
     "y": "0.64"
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside"
   },
   "media": "this.album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_4",
   "class": "PhotoPlayListItem"
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.55,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0_HS_0_0.png",
      "width": 206,
      "class": "ImageResourceLevel",
      "height": 158
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -33.9,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -2.06
  }
 ],
 "id": "overlay_C55F808D_CBD7_B204_41E2_7B6D59D53B18",
 "maps": [
  {
   "hfov": 7.55,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.06,
   "image": {
    "levels": [
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0_HS_0_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -33.9
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_02442B44_1204_3101_416A_82554A561445, {'iconLineWidth':5,'pressedBorderSize':0,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedIconHeight':20,'backgroundOpacity':0.3,'paddingLeft':5,'backgroundColorDirection':'vertical','rollOverIconWidth':20,'paddingBottom':5,'rollOverIconHeight':20,'borderSize':0,'rollOverBackgroundOpacity':0.3,'paddingTop':5,'iconHeight':20,'paddingRight':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','iconColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','borderColor':'#000000','pressedIconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_04CC8877_1204_1F0E_41A7_9A4E4CE68198, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.55,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0_HS_0_0.png",
      "width": 206,
      "class": "ImageResourceLevel",
      "height": 158
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -33.9,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -2.06
  }
 ],
 "id": "overlay_C687AB0B_CBBA_5E90_41CB_C5B9F4E6304C",
 "maps": [
  {
   "hfov": 7.55,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.06,
   "image": {
    "levels": [
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0_HS_0_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -33.9
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_025B62F4_1204_7302_4190_F09822E035F3, {'iconLineWidth':5,'pressedBorderSize':0,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedIconHeight':20,'backgroundOpacity':0.3,'paddingLeft':5,'backgroundColorDirection':'vertical','rollOverIconWidth':20,'paddingBottom':5,'rollOverIconHeight':20,'borderSize':0,'rollOverBackgroundOpacity':0.3,'paddingTop':5,'iconHeight':20,'paddingRight':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','iconColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','borderColor':'#000000','pressedIconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_04CD2877_1204_1F0E_419D_C8184E3D45C8, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "media": "this.album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C",
 "begin": "this.updateMediaLabelFromPlayList(this.album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_AlbumPlayList, this.htmltext_0703B5AF_120B_F11E_41B0_6A77522FA219, this.albumitem_06FF85AF_120B_F11E_41A1_A21BEF8BB71D); this.loopAlbum(this.playList_1FF3F7C5_11FC_1102_4185_B0A8F6157DE0, 0)",
 "player": "this.viewer_uid06FFA5AF_120B_F11E_4199_51C708DAD980PhotoAlbumPlayer",
 "class": "PhotoAlbumPlayListItem",
 "id": "albumitem_06FF85AF_120B_F11E_41A1_A21BEF8BB71D"
},
{
 "id": "WebFrame_F5389D50_E452_6E5A_41D3_A33765C58907",
 "left": "0%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "93.511%",
 "class": "WebFrame",
 "borderSize": 0,
 "url": "//www.youtube.com/embed/e94n66lHQyc",
 "borderRadius": 0,
 "minHeight": 1,
 "scrollEnabled": true,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "top": "0.14%",
 "minWidth": 1,
 "insetBorder": false,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingTop": 0,
 "height": "99.18%",
 "data": {
  "name": "WebFrame7000"
 }
},
{
 "maxHeight": 60,
 "id": "Image_F5D7638F_E45E_DAC6_41DF_F72B0C65B898",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scaleMode": "fit_inside",
 "paddingRight": 0,
 "right": "3.34%",
 "width": "2.793%",
 "class": "Image",
 "url": "skin/Image_F5D7638F_E45E_DAC6_41DF_F72B0C65B898.png",
 "borderRadius": 0,
 "horizontalAlign": "center",
 "propagateClick": false,
 "minHeight": 1,
 "borderSize": 0,
 "top": "0.07%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_F51F756A_E452_7E4E_41DE_877A0078152A, false, 0, null, null, false)",
 "paddingBottom": 0,
 "height": "5.443%",
 "shadow": false,
 "paddingTop": 0,
 "maxWidth": 60,
 "data": {
  "name": "Image7021"
 }
},
{
 "transitionDuration": 500,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "viewer_uid06FFA5AF_120B_F11E_4199_51C708DAD980",
 "toolTipPaddingTop": 4,
 "paddingLeft": 0,
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "class": "ViewerArea",
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "width": "100%",
 "borderRadius": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "minHeight": 50,
 "toolTipBorderRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "progressBarBorderColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 0,
 "minWidth": 100,
 "playbackBarHeadOpacity": 1,
 "toolTipBorderColor": "#767676",
 "toolTipShadowSpread": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "height": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "shadow": false,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "borderSize": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowOpacity": 1,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "paddingBottom": 0,
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "paddingTop": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipFontColor": "#606060",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "ViewerArea10777"
 }
},
{
 "id": "htmltext_0703B5AF_120B_F11E_41B0_6A77522FA219",
 "backgroundOpacity": 0.7,
 "paddingLeft": 10,
 "scrollBarColor": "#000000",
 "paddingRight": 10,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "class": "HTMLText",
 "borderSize": 0,
 "width": "100%",
 "borderRadius": 0,
 "minHeight": 0,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "showEffect": {
  "duration": 250,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "hideEffect": {
  "duration": 250,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "minWidth": 0,
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 5,
 "backgroundColor": [
  "#000000"
 ],
 "shadow": false,
 "html": "",
 "paddingTop": 5,
 "visible": false,
 "scrollBarWidth": 10,
 "data": {
  "name": "HTMLText10780"
 }
},
{
 "transparencyActive": false,
 "id": "component_0702E5AF_120B_F11E_419C_5A0D7A67F1FC",
 "left": 10,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "iconURL": "skin/album_left.png",
 "class": "IconButton",
 "borderRadius": 0,
 "borderSize": 0,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "propagateClick": false,
 "minHeight": 0,
 "top": "45%",
 "showEffect": {
  "duration": 250,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "hideEffect": {
  "duration": 250,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "mode": "push",
 "minWidth": 0,
 "click": "this.loadFromCurrentMediaPlayList(this.album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_AlbumPlayList, -1)",
 "paddingBottom": 0,
 "paddingTop": 0,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "IconButton10781"
 },
 "cursor": "hand"
},
{
 "transparencyActive": false,
 "id": "component_0702D5AF_120B_F11E_4170_71310C88CB3D",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": 10,
 "iconURL": "skin/album_right.png",
 "class": "IconButton",
 "borderRadius": 0,
 "borderSize": 0,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "propagateClick": false,
 "minHeight": 0,
 "top": "45%",
 "showEffect": {
  "duration": 250,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "hideEffect": {
  "duration": 250,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "mode": "push",
 "minWidth": 0,
 "click": "this.loadFromCurrentMediaPlayList(this.album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_AlbumPlayList, 1)",
 "paddingBottom": 0,
 "paddingTop": 0,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "IconButton10782"
 },
 "cursor": "hand"
},
{
 "viewerArea": "this.viewer_uid06FFA5AF_120B_F11E_4199_51C708DAD980",
 "class": "PhotoAlbumPlayer",
 "id": "viewer_uid06FFA5AF_120B_F11E_4199_51C708DAD980PhotoAlbumPlayer"
}],
 "height": "100%",
 "data": {
  "name": "Player475"
 },
 "desktopMipmappingEnabled": false
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
