(function(){
    var script = {
 "defaultVRPointer": "laser",
 "start": "this.init(); this.syncPlaylists([this.ThumbnailList_96C85140_9ACD_D28F_41DA_AEB5717EBF0E_playlist,this.mainPlayList]); this.playList_F3909C1B_E472_2DCE_4148_BABDC6E9B839.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_DB947932_CBD5_721C_4181_10D28E6E6BBF].forEach(function(component) { component.set('visible', false); }) }",
 "downloadEnabled": false,
 "data": {
  "name": "Player475"
 },
 "height": "100%",
 "id": "rootPlayer",
 "paddingLeft": 0,
 "paddingRight": 0,
 "children": [
  "this.MainViewer",
  "this.ThumbnailList_96C85140_9ACD_D28F_41DA_AEB5717EBF0E",
  "this.HTMLText_975BA4D8_9ACC_33BF_41B6_E382D41A8D4A",
  "this.MapViewer",
  "this.IconButton_DB947932_CBD5_721C_4181_10D28E6E6BBF",
  "this.IconButton_DD3B0FDD_CC2C_CE04_41CC_8A134CB1896A",
  "this.Image_CAE00CC7_DA20_59CF_41E6_248AF0EE22D0",
  "this.Container_F51F756A_E452_7E4E_41DE_877A0078152A",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "overflow": "visible",
 "minHeight": 20,
 "verticalAlign": "top",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "borderSize": 0,
 "definitions": [{
 "items": [
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_96C85140_9ACD_D28F_41DA_AEB5717EBF0E_playlist, 0, 1)",
   "media": "this.panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9",
   "camera": "this.panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_96C85140_9ACD_D28F_41DA_AEB5717EBF0E_playlist, 1, 2)",
   "media": "this.panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4",
   "camera": "this.panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_96C85140_9ACD_D28F_41DA_AEB5717EBF0E_playlist, 2, 3)",
   "media": "this.panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D",
   "camera": "this.panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_96C85140_9ACD_D28F_41DA_AEB5717EBF0E_playlist, 3, 4)",
   "media": "this.panorama_82F58ECA_887A_11A7_41C3_CC78280C5471",
   "camera": "this.panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_96C85140_9ACD_D28F_41DA_AEB5717EBF0E_playlist, 4, 0)",
   "media": "this.panorama_820D06B4_887A_31E3_41C0_3B358CD61033",
   "camera": "this.panorama_820D06B4_887A_31E3_41C0_3B358CD61033_camera",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "ThumbnailList_96C85140_9ACD_D28F_41DA_AEB5717EBF0E_playlist",
 "class": "PlayList"
},
{
 "id": "ImageResource_C88A9E5E_DA20_58C0_41E2_57D3E2FAB3FD",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_D4FB5ACC_DA20_59C0_41BC_A38CC46EDC36_0_0.jpg",
   "width": 15360,
   "class": "ImageResourceLevel",
   "height": 8640
  },
  {
   "url": "media/popup_D4FB5ACC_DA20_59C0_41BC_A38CC46EDC36_0_1.jpg",
   "width": 8192,
   "class": "ImageResourceLevel",
   "height": 4608
  },
  {
   "url": "media/popup_D4FB5ACC_DA20_59C0_41BC_A38CC46EDC36_0_2.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2304
  },
  {
   "url": "media/popup_D4FB5ACC_DA20_59C0_41BC_A38CC46EDC36_0_3.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1152
  },
  {
   "url": "media/popup_D4FB5ACC_DA20_59C0_41BC_A38CC46EDC36_0_4.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_D4FB5ACC_DA20_59C0_41BC_A38CC46EDC36_0_5.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ]
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -1.76,
  "class": "PanoramaCameraPosition",
  "pitch": -40.45
 },
 "id": "panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_camera",
 "class": "PanoramaCamera"
},
{
 "closeButtonBackgroundOpacity": 1,
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "closeButtonPaddingBottom": 0,
 "id": "window_CE73AB68_DF6C_9721_41E7_82DE9F5DADF7",
 "closeButtonPaddingLeft": 0,
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "closeButtonRollOverBackgroundColor": [],
 "headerBackgroundOpacity": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "width": 400,
 "titleTextDecoration": "none",
 "minHeight": 20,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "closeButtonPressedIconLineWidth": 3,
 "modal": true,
 "verticalAlign": "middle",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "bodyBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "closeButtonIconWidth": 20,
 "title": "",
 "height": 600,
 "scrollBarColor": "#000000",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "class": "Window",
 "backgroundColor": [],
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 20,
 "closeButtonPaddingTop": 0,
 "bodyPaddingTop": 0,
 "gap": 10,
 "minWidth": 20,
 "bodyPaddingBottom": 0,
 "closeButtonBackgroundColor": [],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 0,
 "shadow": true,
 "bodyPaddingLeft": 0,
 "titleFontColor": "#000000",
 "titlePaddingTop": 5,
 "headerPaddingBottom": 5,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "1.29vmin",
 "headerBorderSize": 0,
 "closeButtonBorderColor": "#000000",
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColorRatios": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "shadowSpread": 1,
 "closeButtonBackgroundColorDirection": "vertical",
 "paddingRight": 0,
 "titleFontWeight": "normal",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.container_F3E9EC1B_E472_2DCE_41DA_9078436C8B9C"
 ],
 "shadowColor": "#000000",
 "headerPaddingLeft": 10,
 "footerBackgroundOpacity": 0,
 "overflow": "scroll",
 "shadowHorizontalLength": 3,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [],
 "headerPaddingRight": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "footerBorderColor": "#000000",
 "layout": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "shadowVerticalLength": 0,
 "footerBorderSize": 0,
 "titleFontFamily": "Arial",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "bodyPaddingRight": 0,
 "scrollBarMargin": 2,
 "horizontalAlign": "center",
 "data": {
  "name": "Window4199"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "closeButtonPaddingRight": 0,
 "contentOpaque": false,
 "closeButtonBorderSize": 0,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "movementMode": "constrained",
 "viewerArea": "this.MapViewer",
 "id": "MapViewerMapPlayer",
 "class": "MapPlayer"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_D4ECE477_DA20_68C0_41CD_A106F075B430",
 "yaw": 3.49,
 "popupDistance": 100,
 "hfov": 7.58,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_D4ECE477_DA20_68C0_41CD_A106F075B430_0_4.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "pitch": -33.49,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay"
},
{
 "thumbnailUrl": "media/album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_2_t.jpg",
 "duration": 0,
 "id": "album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_2",
 "class": "Photo",
 "width": 4961,
 "label": "PETA KOORDINAT LAHAN",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_2.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 3508
},
{
 "thumbnailUrl": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_t.jpg",
 "partial": false,
 "label": "BARAT",
 "id": "panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4",
 "hfovMin": "120%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "rowCount": 6,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "rowCount": 6,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "rowCount": 6,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "rowCount": 6,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "rowCount": 6,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "rowCount": 6,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "pitch": 0,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_DA809F54_CBD5_4E04_41C0_3BC1488DB74A",
  "this.popup_D4ECE477_DA20_68C0_41CD_A106F075B430"
 ],
 "mapLocations": [
  {
   "map": "this.map_948045FF_9AD4_3D71_41D3_949F4AE5E20A",
   "x": 2377.01,
   "angle": 95.11,
   "y": 2680.58,
   "class": "PanoramaMapLocation"
  }
 ],
 "hfov": 360
},
{
 "change": "this.showComponentsWhileMouseOver(this.container_F3E9EC1B_E472_2DCE_41DA_9078436C8B9C, [this.htmltext_F3E97C1B_E472_2DCE_4195_A6B84A99A07D,this.component_F3E8DC1B_E472_2DCE_41E3_1DB3EA6A5233,this.component_F3E8CC1B_E472_2DCE_417F_1178388CCB82], 2000)",
 "items": [
  "this.albumitem_F3E7CC1B_E472_2DCE_41E6_B915F29B4214"
 ],
 "id": "playList_EB4B1161_E42E_367B_41E6_750E119EC4EA",
 "class": "PlayList"
},
{
 "thumbnailUrl": "media/photo_D3E22D1E_DF6C_931E_41C6_2B1D04E88604_t.jpg",
 "duration": 0,
 "id": "photo_D3E22D1E_DF6C_931E_41C6_2B1D04E88604",
 "class": "Photo",
 "width": 4962,
 "label": "SITE PLAN MONOCROME-1",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_D3E22D1E_DF6C_931E_41C6_2B1D04E88604.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 3508
},
{
 "id": "ImageResource_C88B0E58_DA20_58C1_41E8_2F51AF5FB5D7",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_D4E689B2_DA20_D841_41AD_B793914B75CE_0_0.jpg",
   "width": 15360,
   "class": "ImageResourceLevel",
   "height": 8640
  },
  {
   "url": "media/popup_D4E689B2_DA20_D841_41AD_B793914B75CE_0_1.jpg",
   "width": 8192,
   "class": "ImageResourceLevel",
   "height": 4608
  },
  {
   "url": "media/popup_D4E689B2_DA20_D841_41AD_B793914B75CE_0_2.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2304
  },
  {
   "url": "media/popup_D4E689B2_DA20_D841_41AD_B793914B75CE_0_3.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1152
  },
  {
   "url": "media/popup_D4E689B2_DA20_D841_41AD_B793914B75CE_0_4.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_D4E689B2_DA20_D841_41AD_B793914B75CE_0_5.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ]
},
{
 "thumbnailUrl": "media/photo_D41C13A7_DF6C_B72F_41D1_75C429856E23_t.jpg",
 "duration": 0,
 "id": "photo_D41C13A7_DF6C_B72F_41D1_75C429856E23",
 "class": "Photo",
 "width": 4962,
 "label": "SITE PLAN-1",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_D41C13A7_DF6C_B72F_41D1_75C429856E23.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 3508
},
{
 "thumbnailUrl": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_t.jpg",
 "partial": false,
 "label": "UTARA",
 "id": "panorama_820D06B4_887A_31E3_41C0_3B358CD61033",
 "hfovMin": "120%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "rowCount": 6,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "rowCount": 6,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "rowCount": 6,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "rowCount": 6,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "rowCount": 6,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "rowCount": 6,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "pitch": 0,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_C55F808D_CBD7_B204_41E2_7B6D59D53B18",
  "this.popup_D53CAF97_DA21_D84F_41DD_FDF7418A4445"
 ],
 "mapLocations": [
  {
   "map": "this.map_948045FF_9AD4_3D71_41D3_949F4AE5E20A",
   "x": 3861.91,
   "angle": 180.67,
   "y": 437.02,
   "class": "PanoramaMapLocation"
  }
 ],
 "hfov": 360
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_D4E689B2_DA20_D841_41AD_B793914B75CE",
 "yaw": 3.49,
 "popupDistance": 100,
 "hfov": 7.58,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_D4E689B2_DA20_D841_41AD_B793914B75CE_0_4.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "pitch": -33.49,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay"
},
{
 "thumbnailUrl": "media/album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_0_t.jpg",
 "duration": 0,
 "id": "album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_0",
 "class": "Photo",
 "width": 4961,
 "label": "PETA FOTO UDARA",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_0.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 3508
},
{
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "id": "MainViewerVideoPlayer",
 "class": "VideoPlayer"
},
{
 "mouseControlMode": "drag_acceleration",
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "displayPlaybackBar": true,
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "class": "PanoramaPlayer"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_D4FB5ACC_DA20_59C0_41BC_A38CC46EDC36",
 "yaw": -2.06,
 "popupDistance": 100,
 "hfov": 7.55,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_D4FB5ACC_DA20_59C0_41BC_A38CC46EDC36_0_4.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "pitch": -33.9,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay"
},
{
 "id": "ImageResource_C8841E57_DA20_58CF_41E8_6F67382DB7EF",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_D4ECE477_DA20_68C0_41CD_A106F075B430_0_0.jpg",
   "width": 15360,
   "class": "ImageResourceLevel",
   "height": 8640
  },
  {
   "url": "media/popup_D4ECE477_DA20_68C0_41CD_A106F075B430_0_1.jpg",
   "width": 8192,
   "class": "ImageResourceLevel",
   "height": 4608
  },
  {
   "url": "media/popup_D4ECE477_DA20_68C0_41CD_A106F075B430_0_2.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2304
  },
  {
   "url": "media/popup_D4ECE477_DA20_68C0_41CD_A106F075B430_0_3.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1152
  },
  {
   "url": "media/popup_D4ECE477_DA20_68C0_41CD_A106F075B430_0_4.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_D4ECE477_DA20_68C0_41CD_A106F075B430_0_5.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ]
},
{
 "thumbnailUrl": "media/album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_t.png",
 "playList": "this.album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_AlbumPlayList",
 "label": "Photo Album PETA FOTO UDARA",
 "id": "album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C",
 "class": "PhotoAlbum"
},
{
 "thumbnailUrl": "media/album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_3_t.jpg",
 "duration": 0,
 "id": "album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_3",
 "class": "Photo",
 "width": 4961,
 "label": "PETA PENYESUAIAN KOORDINAT LAHAN",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_3.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 3508
},
{
 "thumbnailUrl": "media/album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_1_t.jpg",
 "duration": 0,
 "id": "album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_1",
 "class": "Photo",
 "width": 4961,
 "label": "PETA KESESUAIAN TATA RUANG",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_1.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 3508
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "displayOriginPosition": {
  "stereographicFactor": 1,
  "yaw": 0.25,
  "class": "RotationalCameraDisplayPosition",
  "pitch": -90,
  "hfov": 165
 },
 "initialPosition": {
  "yaw": 0.25,
  "class": "PanoramaCameraPosition",
  "pitch": -63.56
 },
 "displayMovements": [
  {
   "easing": "linear",
   "duration": 1000,
   "class": "TargetRotationalCameraDisplayMovement"
  },
  {
   "easing": "cubic_in_out",
   "duration": 3000,
   "targetPitch": -63.56,
   "class": "TargetRotationalCameraDisplayMovement",
   "targetStereographicFactor": 0
  }
 ],
 "id": "panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_camera",
 "class": "PanoramaCamera"
},
{
 "id": "ImageResource_C8899E5E_DA20_58C0_41DA_C3A6623CCF1A",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_D53CAF97_DA21_D84F_41DD_FDF7418A4445_0_0.jpg",
   "width": 15360,
   "class": "ImageResourceLevel",
   "height": 8640
  },
  {
   "url": "media/popup_D53CAF97_DA21_D84F_41DD_FDF7418A4445_0_1.jpg",
   "width": 8192,
   "class": "ImageResourceLevel",
   "height": 4608
  },
  {
   "url": "media/popup_D53CAF97_DA21_D84F_41DD_FDF7418A4445_0_2.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2304
  },
  {
   "url": "media/popup_D53CAF97_DA21_D84F_41DD_FDF7418A4445_0_3.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1152
  },
  {
   "url": "media/popup_D53CAF97_DA21_D84F_41DD_FDF7418A4445_0_4.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_D53CAF97_DA21_D84F_41DD_FDF7418A4445_0_5.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ]
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0.75,
  "class": "PanoramaCameraPosition",
  "pitch": -30.9
 },
 "id": "panorama_820D06B4_887A_31E3_41C0_3B358CD61033_camera",
 "class": "PanoramaCamera"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_D53CAF97_DA21_D84F_41DD_FDF7418A4445",
 "yaw": -2.06,
 "popupDistance": 100,
 "hfov": 7.55,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_D53CAF97_DA21_D84F_41DD_FDF7418A4445_0_4.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "pitch": -33.9,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0.25,
  "class": "PanoramaCameraPosition",
  "pitch": -40.2
 },
 "id": "panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_camera",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/video_D35F3C5F_DF84_8B71_41DD_04EF32F90DDB_t.jpg",
 "label": "3D Konsep Galangan",
 "scaleMode": "fit_inside",
 "class": "Video",
 "width": 1920,
 "loop": false,
 "id": "video_D35F3C5F_DF84_8B71_41DD_04EF32F90DDB",
 "height": 1080,
 "video": {
  "mp4Url": "media/video_D35F3C5F_DF84_8B71_41DD_04EF32F90DDB.mp4",
  "width": 1920,
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "thumbnailUrl": "media/map_948045FF_9AD4_3D71_41D3_949F4AE5E20A_t.jpg",
 "height": 4883,
 "label": "MAP FLOOR",
 "id": "map_948045FF_9AD4_3D71_41D3_949F4AE5E20A",
 "class": "Map",
 "width": 8192,
 "fieldOfViewOverlayOutsideColor": "#000000",
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
 "maximumZoomFactor": 1.2,
 "fieldOfViewOverlayRadiusScale": 0.14,
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "overlays": [
  "this.overlay_97266B35_9AD4_56F1_41E0_5FEC6491E0E7",
  "this.overlay_8AA26D8D_9ADC_4D91_41C4_B242DE053430",
  "this.overlay_8A10C3E3_9ADC_5591_41D3_5727B8194571",
  "this.overlay_8A5672F0_9ADC_578F_41E1_8C1A9C619654",
  "this.overlay_8B108C64_9ADC_5297_41D5_141AEF8C1B24"
 ],
 "initialZoomFactor": 1,
 "scaleMode": "fit_inside",
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "minimumZoomFactor": 0.5,
 "fieldOfViewOverlayOutsideOpacity": 0
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_948045FF_9AD4_3D71_41D3_949F4AE5E20A",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_F390BC1B_E472_2DCE_41EB_FDA514117072",
 "class": "PlayList"
},
{
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer"
},
{
 "thumbnailUrl": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_t.jpg",
 "partial": false,
 "label": "SELATAN",
 "id": "panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D",
 "hfovMin": "120%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "rowCount": 6,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "rowCount": 6,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "rowCount": 6,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "rowCount": 6,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "rowCount": 6,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "rowCount": 6,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "pitch": 0,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_DB3490F5_CBCE_A786_41CA_8CED96A15FC1",
  "this.popup_D4E689B2_DA20_D841_41AD_B793914B75CE"
 ],
 "mapLocations": [
  {
   "map": "this.map_948045FF_9AD4_3D71_41D3_949F4AE5E20A",
   "x": 3364.7,
   "angle": 2.56,
   "y": 4377.87,
   "class": "PanoramaMapLocation"
  }
 ],
 "hfov": 360
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_CB20064F_DA20_28DF_41E0_5603979D9489",
 "yaw": 0.34,
 "popupDistance": 100,
 "hfov": 5.35,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_CB20064F_DA20_28DF_41E0_5603979D9489_0_4.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "pitch": -68.91,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay"
},
{
 "thumbnailUrl": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_t.jpg",
 "partial": false,
 "label": "TENGAH",
 "id": "panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9",
 "hfovMin": "120%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "rowCount": 6,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "rowCount": 6,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "rowCount": 6,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "rowCount": 6,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "rowCount": 6,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "rowCount": 6,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "pitch": 0,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_C466AC2B_CBD5_520C_41E7_4F96E79A6EA2",
  "this.popup_CB20064F_DA20_28DF_41E0_5603979D9489"
 ],
 "mapLocations": [
  {
   "map": "this.map_948045FF_9AD4_3D71_41D3_949F4AE5E20A",
   "x": 4035.07,
   "angle": 0,
   "y": 2586.87,
   "class": "PanoramaMapLocation"
  }
 ],
 "hfov": 360
},
{
 "thumbnailUrl": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_t.jpg",
 "partial": false,
 "label": "TIMUR",
 "id": "panorama_82F58ECA_887A_11A7_41C3_CC78280C5471",
 "hfovMin": "120%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "rowCount": 6,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "rowCount": 6,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "rowCount": 6,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "rowCount": 6,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "rowCount": 6,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "rowCount": 6,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "pitch": 0,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_C687AB0B_CBBA_5E90_41CB_C5B9F4E6304C",
  "this.popup_D4FB5ACC_DA20_59C0_41BC_A38CC46EDC36"
 ],
 "mapLocations": [
  {
   "map": "this.map_948045FF_9AD4_3D71_41D3_949F4AE5E20A",
   "x": 5342.82,
   "angle": -80.46,
   "y": 3084.91,
   "class": "PanoramaMapLocation"
  }
 ],
 "hfov": 360
},
{
 "thumbnailUrl": "media/album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_4_t.jpg",
 "duration": 0,
 "id": "album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_4",
 "class": "Photo",
 "width": 4961,
 "label": "PETA SELISIH LAHAN DAN PERIZINAN",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_4.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 3508
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_948045FF_9AD4_3D71_41D3_949F4AE5E20A",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_F3909C1B_E472_2DCE_4148_BABDC6E9B839",
 "class": "PlayList"
},
{
 "id": "ImageResource_C886EE57_DA20_58CF_41D1_63411F86D6F3",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_CB20064F_DA20_28DF_41E0_5603979D9489_0_0.jpg",
   "width": 15360,
   "class": "ImageResourceLevel",
   "height": 8640
  },
  {
   "url": "media/popup_CB20064F_DA20_28DF_41E0_5603979D9489_0_1.jpg",
   "width": 8192,
   "class": "ImageResourceLevel",
   "height": 4608
  },
  {
   "url": "media/popup_CB20064F_DA20_28DF_41E0_5603979D9489_0_2.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2304
  },
  {
   "url": "media/popup_CB20064F_DA20_28DF_41E0_5603979D9489_0_3.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1152
  },
  {
   "url": "media/popup_CB20064F_DA20_28DF_41E0_5603979D9489_0_4.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_CB20064F_DA20_28DF_41E0_5603979D9489_0_5.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ]
},
{
 "items": [
  "this.PanoramaPlayListItem_F393CC1B_E472_2DCE_41E0_2009CA38386C",
  "this.PanoramaPlayListItem_F3931C1B_E472_2DCE_41E2_9137BC28D689",
  "this.PanoramaPlayListItem_F3928C1B_E472_2DCE_41E3_277614597889",
  "this.PanoramaPlayListItem_F395EC1B_E472_2DCE_41E4_C2CFE53FC6EB",
  "this.PanoramaPlayListItem_F3954C1B_E472_2DCE_41DC_BD7F26DD58D2",
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "media": "this.album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "end": "this.trigger('tourEnded')",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 6, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 6)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 6, 0)",
   "media": "this.video_D35F3C5F_DF84_8B71_41DD_04EF32F90DDB",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 1.26,
  "class": "PanoramaCameraPosition",
  "pitch": -43.46
 },
 "id": "panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_camera",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/photo_D3C1307B_DF6C_B127_41E7_9B5123E8974C_t.jpg",
 "duration": 0,
 "id": "photo_D3C1307B_DF6C_B127_41E7_9B5123E8974C",
 "class": "Photo",
 "width": 4962,
 "label": "SITE PLAN OVERLAY CITRA-1",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_D3C1307B_DF6C_B127_41E7_9B5123E8974C.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 3508
},
{
 "progressBorderSize": 0,
 "id": "MainViewer",
 "paddingLeft": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderSize": 1,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "playbackBarHeadShadowHorizontalLength": 0,
 "minHeight": 50,
 "toolTipDisplayTime": 600,
 "playbackBarLeft": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "toolTipBorderRadius": 3,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 5,
 "borderSize": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "displayTooltipInTouchScreens": true,
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBarBorderColor": "#000000",
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "toolTipBorderColor": "#767676",
 "class": "ViewerArea",
 "minWidth": 100,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "shadow": false,
 "paddingTop": 0,
 "toolTipFontSize": "30px",
 "toolTipTextShadowBlurRadius": 3,
 "transitionDuration": 500,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "height": "100%",
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "paddingRight": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "transitionMode": "blending",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#333333",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "data": {
  "name": "Main Viewer"
 },
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7
},
{
 "itemVerticalAlign": "middle",
 "selectedItemLabelFontWeight": "bold",
 "id": "ThumbnailList_96C85140_9ACD_D28F_41DA_AEB5717EBF0E",
 "left": "0%",
 "itemThumbnailShadowSpread": 1,
 "itemThumbnailShadow": true,
 "width": "100%",
 "itemBackgroundOpacity": 0,
 "paddingRight": 20,
 "itemLabelFontColor": "#FFFFFF",
 "paddingLeft": 20,
 "playList": "this.ThumbnailList_96C85140_9ACD_D28F_41DA_AEB5717EBF0E_playlist",
 "itemThumbnailBorderRadius": 5,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "itemPaddingTop": 3,
 "itemBackgroundColorDirection": "vertical",
 "minHeight": 1,
 "paddingBottom": 10,
 "itemBackgroundColor": [],
 "verticalAlign": "top",
 "itemLabelGap": 8,
 "borderRadius": 5,
 "itemThumbnailShadowColor": "#000000",
 "itemBackgroundColorRatios": [],
 "selectedItemLabelFontColor": "#FFCC00",
 "propagateClick": false,
 "itemThumbnailShadowHorizontalLength": 3,
 "bottom": "0%",
 "itemPaddingBottom": 3,
 "itemThumbnailHeight": 75,
 "borderSize": 0,
 "rollOverItemLabelFontWeight": "bold",
 "itemMode": "normal",
 "itemOpacity": 1,
 "minWidth": 1,
 "scrollBarColor": "#FFFFFF",
 "scrollBarVisible": "rollOver",
 "itemLabelHorizontalAlign": "center",
 "layout": "horizontal",
 "itemLabelFontStyle": "normal",
 "class": "ThumbnailList",
 "height": 133.05,
 "itemPaddingRight": 3,
 "itemThumbnailOpacity": 1,
 "gap": 13,
 "scrollBarOpacity": 0.5,
 "itemLabelFontWeight": "normal",
 "itemThumbnailWidth": 100,
 "scrollBarMargin": 2,
 "horizontalAlign": "center",
 "shadow": false,
 "itemBorderRadius": 0,
 "itemLabelFontFamily": "Arial",
 "paddingTop": 10,
 "itemThumbnailShadowBlurRadius": 8,
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontSize": 14,
 "itemLabelTextDecoration": "none",
 "itemThumbnailShadowOpacity": 0.57,
 "itemHorizontalAlign": "center",
 "itemThumbnailShadowVerticalLength": 3,
 "data": {
  "name": "ThumbnailList35762"
 },
 "itemPaddingLeft": 3,
 "itemLabelPosition": "bottom"
},
{
 "id": "HTMLText_975BA4D8_9ACC_33BF_41B6_E382D41A8D4A",
 "paddingLeft": 20,
 "paddingRight": 20,
 "right": "0.01%",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 20,
 "scrollBarWidth": 10,
 "top": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "width": "52.294%",
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "class": "HTMLText",
 "height": "6.946%",
 "scrollBarColor": "#000000",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:right;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0000cc;font-size:27px;\"><B>FOTO UDARA 360  </B></SPAN><SPAN STYLE=\"color:#ffffff;font-size:27px;\"><B>PT. GALANGAN LANCAR ABADI</B></SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText53815"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 20
},
{
 "progressBorderSize": 0,
 "id": "MapViewer",
 "left": "0%",
 "paddingLeft": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderSize": 1,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "playbackBarHeadShadowHorizontalLength": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "playbackBarLeft": 0,
 "width": "24.487%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "toolTipBorderRadius": 3,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "borderSize": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "displayTooltipInTouchScreens": true,
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBarBorderColor": "#000000",
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "toolTipBorderColor": "#767676",
 "class": "ViewerArea",
 "minWidth": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "shadow": false,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadWidth": 6,
 "paddingTop": 0,
 "toolTipFontSize": "30px",
 "toolTipTextShadowBlurRadius": 3,
 "transitionDuration": 500,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "height": "31.643%",
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "paddingRight": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "top": "0%",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "transitionMode": "blending",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#333333",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "data": {
  "name": "MapViewer"
 },
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7
},
{
 "maxHeight": 128,
 "data": {
  "name": "IconButton1493"
 },
 "iconURL": "skin/IconButton_DB947932_CBD5_721C_4181_10D28E6E6BBF.png",
 "id": "IconButton_DB947932_CBD5_721C_4181_10D28E6E6BBF",
 "toolTipShadowColor": "#333333",
 "width": 48,
 "paddingRight": 0,
 "right": "48.2%",
 "paddingLeft": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingRight": 6,
 "minHeight": 1,
 "toolTipDisplayTime": 600,
 "toolTipFontStyle": "normal",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "toolTipPaddingTop": 4,
 "borderRadius": 0,
 "paddingBottom": 0,
 "toolTipShadowOpacity": 1,
 "toolTipBorderRadius": 3,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowHorizontalLength": 0,
 "bottom": "14.44%",
 "toolTipFontFamily": "Arial",
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "toolTip": "Fullscreen",
 "toolTipShadowVerticalLength": 0,
 "mode": "toggle",
 "height": 61.04,
 "toolTipShadowSpread": 0,
 "toolTipBorderColor": "#767676",
 "class": "IconButton",
 "toolTipOpacity": 1,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#333333",
 "shadow": false,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "30px",
 "toolTipTextShadowColor": "#000000",
 "paddingTop": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "cursor": "hand",
 "maxWidth": 128,
 "toolTipPaddingBottom": 4,
 "horizontalAlign": "center"
},
{
 "maxHeight": 101,
 "iconURL": "skin/IconButton_DD3B0FDD_CC2C_CE04_41CC_8A134CB1896A.png",
 "id": "IconButton_DD3B0FDD_CC2C_CE04_41CC_8A134CB1896A",
 "toolTipShadowColor": "#333333",
 "width": 66.01,
 "paddingRight": 0,
 "right": "40.29%",
 "paddingLeft": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingRight": 6,
 "minHeight": 1,
 "toolTipDisplayTime": 600,
 "toolTipFontStyle": "normal",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "toolTipPaddingTop": 4,
 "borderRadius": 0,
 "paddingBottom": 0,
 "toolTipShadowOpacity": 1,
 "toolTipBorderRadius": 3,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowHorizontalLength": 0,
 "bottom": "13.67%",
 "toolTipFontFamily": "Arial",
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": false,
 "toolTip": "Album Peta",
 "toolTipShadowVerticalLength": 0,
 "mode": "push",
 "height": 64.04,
 "toolTipShadowSpread": 0,
 "click": "this.showPopupMedia(this.window_CE73AB68_DF6C_9721_41E7_82DE9F5DADF7, this.album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C, this.playList_EB4B1161_E42E_367B_41E6_750E119EC4EA, '90%', '90%', false, false)",
 "toolTipBorderColor": "#767676",
 "class": "IconButton",
 "toolTipOpacity": 1,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#333333",
 "shadow": false,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "30px",
 "toolTipTextShadowColor": "#000000",
 "data": {
  "name": "IconButton12181"
 },
 "paddingTop": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "cursor": "hand",
 "maxWidth": 101,
 "toolTipPaddingBottom": 4,
 "horizontalAlign": "center"
},
{
 "maxHeight": 101,
 "id": "Image_CAE00CC7_DA20_59CF_41E6_248AF0EE22D0",
 "left": "40.65%",
 "toolTipShadowColor": "#333333",
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 70,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingRight": 6,
 "minHeight": 1,
 "toolTipDisplayTime": 600,
 "toolTipFontStyle": "normal",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "toolTipPaddingTop": 4,
 "borderRadius": 0,
 "paddingBottom": 0,
 "toolTipShadowOpacity": 1,
 "toolTipBorderRadius": 3,
 "url": "skin/Image_CAE00CC7_DA20_59CF_41E6_248AF0EE22D0.png",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowHorizontalLength": 0,
 "bottom": "13.34%",
 "toolTipFontFamily": "Arial",
 "minWidth": 1,
 "borderSize": 0,
 "toolTip": "Putar Video",
 "toolTipShadowVerticalLength": 0,
 "height": 70,
 "toolTipShadowSpread": 0,
 "click": "this.setComponentVisibility(this.Container_F51F756A_E452_7E4E_41DE_877A0078152A, true, 0, null, null, false)",
 "toolTipBorderColor": "#767676",
 "class": "Image",
 "toolTipOpacity": 1,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#333333",
 "shadow": false,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "30px",
 "toolTipTextShadowColor": "#000000",
 "data": {
  "name": "Image7438"
 },
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "maxWidth": 101,
 "toolTipPaddingBottom": 4,
 "horizontalAlign": "center"
},
{
 "children": [
  "this.WebFrame_F5389D50_E452_6E5A_41D3_A33765C58907",
  "this.Image_F5D7638F_E45E_DAC6_41DF_F72B0C65B898"
 ],
 "id": "Container_F51F756A_E452_7E4E_41DE_877A0078152A",
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "5.25%",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "top": "6.35%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "width": "84.318%",
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "layout": "absolute",
 "class": "Container",
 "height": "87.1%",
 "borderSize": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "Container6886"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "horizontalAlign": "left"
},
{
 "id": "veilPopupPanorama",
 "left": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": 0,
 "backgroundOpacity": 0.55,
 "minHeight": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "propagateClick": false,
 "bottom": 0,
 "backgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "minWidth": 0,
 "top": 0,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 350,
  "class": "FadeInEffect"
 },
 "class": "UIComponent",
 "backgroundColor": [
  "#000000"
 ],
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "data": {
  "name": "UIComponent8933"
 },
 "paddingTop": 0,
 "visible": false
},
{
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": 0,
 "backgroundOpacity": 1,
 "minHeight": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "propagateClick": false,
 "bottom": 0,
 "backgroundColorRatios": [],
 "borderSize": 0,
 "minWidth": 0,
 "top": 0,
 "class": "ZoomImage",
 "backgroundColor": [],
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "data": {
  "name": "ZoomImage8934"
 },
 "paddingTop": 0,
 "visible": false,
 "scaleMode": "custom"
},
{
 "fontFamily": "Arial",
 "shadowBlurRadius": 6,
 "data": {
  "name": "CloseButton8935"
 },
 "id": "closeButtonPopupPanorama",
 "fontStyle": "normal",
 "paddingLeft": 5,
 "pressedIconColor": "#888888",
 "paddingRight": 5,
 "iconLineWidth": 5,
 "right": 10,
 "iconWidth": 20,
 "backgroundOpacity": 0.3,
 "shadowSpread": 1,
 "iconHeight": 20,
 "shadowColor": "#000000",
 "minHeight": 0,
 "fontWeight": "normal",
 "iconColor": "#000000",
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingBottom": 5,
 "propagateClick": false,
 "rollOverIconColor": "#666666",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "borderSize": 0,
 "borderColor": "#000000",
 "mode": "push",
 "minWidth": 0,
 "top": 10,
 "label": "",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 350,
  "class": "FadeInEffect"
 },
 "class": "CloseButton",
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "fontSize": "1.29vmin",
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingTop": 5,
 "visible": false,
 "textDecoration": "none",
 "cursor": "hand",
 "horizontalAlign": "center"
},
{
 "height": "100%",
 "id": "container_F3E9EC1B_E472_2DCE_41DA_9078436C8B9C",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundOpacity": 0.3,
 "children": [
  "this.viewer_uidF3E7FC16_E472_2DC3_41B9_C6C7A78D8A87",
  {
   "height": "30%",
   "left": 0,
   "paddingLeft": 0,
   "paddingRight": 0,
   "right": 0,
   "backgroundOpacity": 0.3,
   "children": [
    "this.htmltext_F3E97C1B_E472_2DCE_4195_A6B84A99A07D"
   ],
   "scrollBarWidth": 7,
   "overflow": "scroll",
   "minHeight": 20,
   "verticalAlign": "bottom",
   "borderRadius": 0,
   "paddingBottom": 0,
   "propagateClick": false,
   "bottom": 0,
   "backgroundColor": [],
   "borderSize": 0,
   "minWidth": 20,
   "scrollBarColor": "#FFFFFF",
   "layout": "vertical",
   "class": "Container",
   "backgroundColorRatios": [],
   "scrollBarVisible": "rollOver",
   "gap": 10,
   "backgroundColorDirection": "vertical",
   "shadow": false,
   "scrollBarMargin": 2,
   "data": {
    "name": "Container8929"
   },
   "paddingTop": 0,
   "contentOpaque": true,
   "scrollBarOpacity": 0.5,
   "horizontalAlign": "left"
  },
  "this.component_F3E8DC1B_E472_2DCE_41E3_1DB3EA6A5233",
  "this.component_F3E8CC1B_E472_2DCE_417F_1178388CCB82"
 ],
 "overflow": "scroll",
 "minHeight": 20,
 "verticalAlign": "top",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "backgroundColor": [],
 "borderSize": 0,
 "width": "100%",
 "minWidth": 20,
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "class": "Container",
 "backgroundColorRatios": [],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "Container8928"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "left"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_D4ECE477_DA20_68C0_41CD_A106F075B430, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'paddingLeft':5,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingBottom':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0}, this.ImageResource_C8841E57_DA20_58CF_41E8_6F67382DB7EF, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": 3.49,
   "class": "HotspotPanoramaOverlayImage",
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
   "pitch": -33.49
  }
 ],
 "id": "overlay_DA809F54_CBD5_4E04_41C0_3BC1488DB74A",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
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
   "yaw": 3.49,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -33.49,
   "hfov": 7.58
  }
 ]
},
{
 "media": "this.album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C",
 "begin": "this.updateMediaLabelFromPlayList(this.album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_AlbumPlayList, this.htmltext_F3E97C1B_E472_2DCE_4195_A6B84A99A07D, this.albumitem_F3E7CC1B_E472_2DCE_41E6_B915F29B4214); this.loopAlbum(this.playList_EB4B1161_E42E_367B_41E6_750E119EC4EA, 0)",
 "player": "this.viewer_uidF3E7FC16_E472_2DC3_41B9_C6C7A78D8A87PhotoAlbumPlayer",
 "id": "albumitem_F3E7CC1B_E472_2DCE_41E6_B915F29B4214",
 "class": "PhotoAlbumPlayListItem"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_D53CAF97_DA21_D84F_41DD_FDF7418A4445, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'paddingLeft':5,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingBottom':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0}, this.ImageResource_C8899E5E_DA20_58C0_41DA_C3A6623CCF1A, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": -2.06,
   "class": "HotspotPanoramaOverlayImage",
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
   "pitch": -33.9
  }
 ],
 "id": "overlay_C55F808D_CBD7_B204_41E2_7B6D59D53B18",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
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
   "yaw": -2.06,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -33.9,
   "hfov": 7.55
  }
 ]
},
{
 "items": [
  {
   "media": "this.album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_0",
   "camera": {
    "duration": 0,
    "targetPosition": {
     "x": "0.47",
     "class": "PhotoCameraPosition",
     "y": "0.40",
     "zoomFactor": 1.5
    },
    "easing": "linear",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_inside",
    "class": "MovementPhotoCamera"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_1",
   "camera": {
    "duration": 0,
    "targetPosition": {
     "x": "0.34",
     "class": "PhotoCameraPosition",
     "y": "0.73",
     "zoomFactor": 1.5
    },
    "easing": "linear",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_inside",
    "class": "MovementPhotoCamera"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_2",
   "camera": {
    "duration": 0,
    "targetPosition": {
     "x": "0.36",
     "class": "PhotoCameraPosition",
     "y": "0.28",
     "zoomFactor": 1.5
    },
    "easing": "linear",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_inside",
    "class": "MovementPhotoCamera"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_3",
   "camera": {
    "duration": 0,
    "targetPosition": {
     "x": "0.40",
     "class": "PhotoCameraPosition",
     "y": "0.60",
     "zoomFactor": 1.5
    },
    "easing": "linear",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_inside",
    "class": "MovementPhotoCamera"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_4",
   "camera": {
    "duration": 0,
    "targetPosition": {
     "x": "0.42",
     "class": "PhotoCameraPosition",
     "y": "0.64",
     "zoomFactor": 1.5
    },
    "easing": "linear",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_inside",
    "class": "MovementPhotoCamera"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.photo_D41C13A7_DF6C_B72F_41D1_75C429856E23",
   "camera": {
    "duration": 0,
    "targetPosition": {
     "x": "0.71",
     "class": "PhotoCameraPosition",
     "y": "0.48",
     "zoomFactor": 1.5
    },
    "easing": "linear",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_inside",
    "class": "MovementPhotoCamera"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.photo_D3C1307B_DF6C_B127_41E7_9B5123E8974C",
   "camera": {
    "duration": 0,
    "targetPosition": {
     "x": "0.45",
     "class": "PhotoCameraPosition",
     "y": "0.60",
     "zoomFactor": 1.5
    },
    "easing": "linear",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_inside",
    "class": "MovementPhotoCamera"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.photo_D3E22D1E_DF6C_931E_41C6_2B1D04E88604",
   "camera": {
    "duration": 0,
    "targetPosition": {
     "x": "0.61",
     "class": "PhotoCameraPosition",
     "y": "0.73",
     "zoomFactor": 1.5
    },
    "easing": "linear",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_inside",
    "class": "MovementPhotoCamera"
   },
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "map": {
  "width": 386.99,
  "x": 3841.57,
  "height": 333.77,
  "offsetX": 0,
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
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "y": 2419.98
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "image": {
  "x": 3841.57,
  "y": 2419.98,
  "class": "HotspotMapOverlayImage",
  "width": 386.99,
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
 "useHandCursor": true,
 "id": "overlay_97266B35_9AD4_56F1_41E0_5FEC6491E0E7",
 "data": {
  "label": "Image"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "map": {
  "width": 386.99,
  "x": 2183.51,
  "height": 333.77,
  "offsetX": 0,
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
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "y": 2513.69
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "image": {
  "x": 2183.51,
  "y": 2513.69,
  "class": "HotspotMapOverlayImage",
  "width": 386.99,
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
 "useHandCursor": true,
 "id": "overlay_8AA26D8D_9ADC_4D91_41C4_B242DE053430",
 "data": {
  "label": "Image"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "map": {
  "width": 386.99,
  "x": 3668.42,
  "height": 333.77,
  "offsetX": 0,
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
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "y": 270.14
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "image": {
  "x": 3668.42,
  "y": 270.14,
  "class": "HotspotMapOverlayImage",
  "width": 386.99,
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
 "useHandCursor": true,
 "id": "overlay_8A10C3E3_9ADC_5591_41D3_5727B8194571",
 "data": {
  "label": "Image"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "map": {
  "width": 386.99,
  "x": 5149.33,
  "height": 333.77,
  "offsetX": 0,
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
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "y": 2918.02
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "image": {
  "x": 5149.33,
  "y": 2918.02,
  "class": "HotspotMapOverlayImage",
  "width": 386.99,
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
 "useHandCursor": true,
 "id": "overlay_8A5672F0_9ADC_578F_41E1_8C1A9C619654",
 "data": {
  "label": "Image"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "map": {
  "width": 386.99,
  "x": 3171.2,
  "height": 333.77,
  "offsetX": 0,
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
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "y": 4210.98
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "image": {
  "x": 3171.2,
  "y": 4210.98,
  "class": "HotspotMapOverlayImage",
  "width": 386.99,
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
 "useHandCursor": true,
 "id": "overlay_8B108C64_9ADC_5297_41D5_141AEF8C1B24",
 "data": {
  "label": "Image"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_D4E689B2_DA20_D841_41AD_B793914B75CE, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'paddingLeft':5,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingBottom':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0}, this.ImageResource_C88B0E58_DA20_58C1_41E8_2F51AF5FB5D7, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": 3.49,
   "class": "HotspotPanoramaOverlayImage",
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
   "pitch": -33.49
  }
 ],
 "id": "overlay_DB3490F5_CBCE_A786_41CA_8CED96A15FC1",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
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
   "yaw": 3.49,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -33.49,
   "hfov": 7.58
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_CB20064F_DA20_28DF_41E0_5603979D9489, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'paddingLeft':5,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingBottom':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0}, this.ImageResource_C886EE57_DA20_58CF_41D1_63411F86D6F3, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": 0.34,
   "class": "HotspotPanoramaOverlayImage",
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
   "pitch": -68.91
  }
 ],
 "id": "overlay_C466AC2B_CBD5_520C_41E7_4F96E79A6EA2",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
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
   "yaw": 0.34,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -68.91,
   "hfov": 5.35
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_D4FB5ACC_DA20_59C0_41BC_A38CC46EDC36, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'paddingLeft':5,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingBottom':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0}, this.ImageResource_C88A9E5E_DA20_58C0_41E2_57D3E2FAB3FD, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": -2.06,
   "class": "HotspotPanoramaOverlayImage",
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
   "pitch": -33.9
  }
 ],
 "id": "overlay_C687AB0B_CBBA_5E90_41CB_C5B9F4E6304C",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
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
   "yaw": -2.06,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -33.9,
   "hfov": 7.55
  }
 ]
},
{
 "media": "this.panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_F393CC1B_E472_2DCE_41E0_2009CA38386C, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1)",
 "camera": "this.panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_camera",
 "id": "PanoramaPlayListItem_F393CC1B_E472_2DCE_41E0_2009CA38386C",
 "class": "PanoramaPlayListItem"
},
{
 "media": "this.panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_F3931C1B_E472_2DCE_41E2_9137BC28D689, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 2)",
 "camera": "this.panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_camera",
 "id": "PanoramaPlayListItem_F3931C1B_E472_2DCE_41E2_9137BC28D689",
 "class": "PanoramaPlayListItem"
},
{
 "media": "this.panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_F3928C1B_E472_2DCE_41E3_277614597889, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 2, 3)",
 "camera": "this.panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_camera",
 "id": "PanoramaPlayListItem_F3928C1B_E472_2DCE_41E3_277614597889",
 "class": "PanoramaPlayListItem"
},
{
 "media": "this.panorama_82F58ECA_887A_11A7_41C3_CC78280C5471",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_F395EC1B_E472_2DCE_41E4_C2CFE53FC6EB, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 3, 4)",
 "camera": "this.panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_camera",
 "id": "PanoramaPlayListItem_F395EC1B_E472_2DCE_41E4_C2CFE53FC6EB",
 "class": "PanoramaPlayListItem"
},
{
 "media": "this.panorama_820D06B4_887A_31E3_41C0_3B358CD61033",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_F3954C1B_E472_2DCE_41DC_BD7F26DD58D2, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 4, 5)",
 "camera": "this.panorama_820D06B4_887A_31E3_41C0_3B358CD61033_camera",
 "id": "PanoramaPlayListItem_F3954C1B_E472_2DCE_41DC_BD7F26DD58D2",
 "class": "PanoramaPlayListItem"
},
{
 "id": "WebFrame_F5389D50_E452_6E5A_41D3_A33765C58907",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundOpacity": 1,
 "minHeight": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "url": "//www.youtube.com/embed/Hh8m4HHik1Q?si=z0LCQ-O0jFC2OoD_",
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "borderSize": 0,
 "width": "93.511%",
 "minWidth": 1,
 "top": "0.14%",
 "class": "WebFrame",
 "backgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "scrollEnabled": true,
 "shadow": false,
 "data": {
  "name": "WebFrame7000"
 },
 "paddingTop": 0,
 "insetBorder": false,
 "height": "99.18%"
},
{
 "maxHeight": 60,
 "id": "Image_F5D7638F_E45E_DAC6_41DF_F72B0C65B898",
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "3.34%",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingBottom": 0,
 "url": "skin/Image_F5D7638F_E45E_DAC6_41DF_F72B0C65B898.png",
 "top": "0.07%",
 "minWidth": 1,
 "borderSize": 0,
 "width": "2.793%",
 "height": "5.443%",
 "propagateClick": false,
 "click": "this.setComponentVisibility(this.Container_F51F756A_E452_7E4E_41DE_877A0078152A, false, 0, null, null, false)",
 "class": "Image",
 "shadow": false,
 "data": {
  "name": "Image7021"
 },
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "maxWidth": 60,
 "horizontalAlign": "center"
},
{
 "progressBorderSize": 0,
 "id": "viewer_uidF3E7FC16_E472_2DC3_41B9_C6C7A78D8A87",
 "paddingLeft": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderSize": 1,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "playbackBarHeadShadowHorizontalLength": 0,
 "minHeight": 50,
 "toolTipDisplayTime": 600,
 "playbackBarLeft": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "toolTipBorderRadius": 3,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "borderSize": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "displayTooltipInTouchScreens": true,
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBarBorderColor": "#000000",
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "toolTipBorderColor": "#767676",
 "class": "ViewerArea",
 "minWidth": 100,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "shadow": false,
 "paddingTop": 0,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "transitionDuration": 500,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "height": "100%",
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "paddingRight": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "transitionMode": "blending",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "data": {
  "name": "ViewerArea8927"
 },
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7
},
{
 "id": "htmltext_F3E97C1B_E472_2DCE_4195_A6B84A99A07D",
 "paddingLeft": 10,
 "paddingRight": 10,
 "backgroundOpacity": 0.7,
 "minHeight": 0,
 "borderRadius": 0,
 "paddingBottom": 5,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeOutEffect"
 },
 "backgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "width": "100%",
 "minWidth": 0,
 "scrollBarColor": "#000000",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeInEffect"
 },
 "class": "HTMLText",
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "html": "",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText8930"
 },
 "paddingTop": 5,
 "visible": false,
 "scrollBarOpacity": 0.5
},
{
 "iconURL": "skin/album_left.png",
 "id": "component_F3E8DC1B_E472_2DCE_41E3_1DB3EA6A5233",
 "left": 10,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "minHeight": 0,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingBottom": 0,
 "top": "45%",
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeOutEffect"
 },
 "minWidth": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeInEffect"
 },
 "mode": "push",
 "propagateClick": false,
 "click": "this.loadFromCurrentMediaPlayList(this.album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_AlbumPlayList, -1)",
 "class": "IconButton",
 "shadow": false,
 "data": {
  "name": "IconButton8931"
 },
 "paddingTop": 0,
 "visible": false,
 "cursor": "hand",
 "horizontalAlign": "center"
},
{
 "iconURL": "skin/album_right.png",
 "id": "component_F3E8CC1B_E472_2DCE_417F_1178388CCB82",
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": 10,
 "backgroundOpacity": 0,
 "minHeight": 0,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingBottom": 0,
 "top": "45%",
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeOutEffect"
 },
 "minWidth": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeInEffect"
 },
 "mode": "push",
 "propagateClick": false,
 "click": "this.loadFromCurrentMediaPlayList(this.album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_AlbumPlayList, 1)",
 "class": "IconButton",
 "shadow": false,
 "data": {
  "name": "IconButton8932"
 },
 "paddingTop": 0,
 "visible": false,
 "cursor": "hand",
 "horizontalAlign": "center"
},
{
 "viewerArea": "this.viewer_uidF3E7FC16_E472_2DC3_41B9_C6C7A78D8A87",
 "id": "viewer_uidF3E7FC16_E472_2DC3_41B9_C6C7A78D8A87PhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer"
}],
 "minWidth": 20,
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "desktopMipmappingEnabled": false,
 "class": "Player",
 "scrollBarVisible": "rollOver",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "gap": 10,
 "shadow": false,
 "scripts": {
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "unregisterKey": function(key){  delete window[key]; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "existsKey": function(key){  return key in window; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getKey": function(key){  return window[key]; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "registerKey": function(key, value){  window[key] = value; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; }
 },
 "backgroundPreloadEnabled": true,
 "scrollBarMargin": 2,
 "width": "100%",
 "mouseWheelEnabled": true,
 "buttonToggleFullscreen": "this.IconButton_DB947932_CBD5_721C_4181_10D28E6E6BBF",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "left"
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
