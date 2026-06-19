(function(){
    var script = {
 "definitions": [{
 "class": "ImageResource",
 "id": "ImageResource_C886EE57_DA20_58CF_41D1_63411F86D6F3",
 "levels": [
  {
   "url": "media/popup_CB20064F_DA20_28DF_41E0_5603979D9489_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 15360,
   "height": 8640
  },
  {
   "url": "media/popup_CB20064F_DA20_28DF_41E0_5603979D9489_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 8192,
   "height": 4608
  },
  {
   "url": "media/popup_CB20064F_DA20_28DF_41E0_5603979D9489_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 4096,
   "height": 2304
  },
  {
   "url": "media/popup_CB20064F_DA20_28DF_41E0_5603979D9489_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 2048,
   "height": 1152
  },
  {
   "url": "media/popup_CB20064F_DA20_28DF_41E0_5603979D9489_0_4.jpg",
   "class": "ImageResourceLevel",
   "width": 1024,
   "height": 576
  },
  {
   "url": "media/popup_CB20064F_DA20_28DF_41E0_5603979D9489_0_5.jpg",
   "class": "ImageResourceLevel",
   "width": 512,
   "height": 288
  }
 ]
},
{
 "class": "PhotoAlbumPlayer",
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPhotoAlbumPlayer"
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 7.55,
 "id": "popup_D4FB5ACC_DA20_59C0_41BC_A38CC46EDC36",
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_D4FB5ACC_DA20_59C0_41BC_A38CC46EDC36_0_4.jpg",
    "class": "ImageResourceLevel",
    "width": 1024,
    "height": 576
   }
  ]
 },
 "pitch": -33.9,
 "yaw": -2.06,
 "hideDuration": 500,
 "popupDistance": 100
},
{
 "class": "Photo",
 "duration": 0,
 "id": "album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_4",
 "thumbnailUrl": "media/album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_4_t.jpg",
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
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "fieldOfViewOverlayOutsideOpacity": 0,
 "label": "MAP FLOOR",
 "id": "map_948045FF_9AD4_3D71_41D3_949F4AE5E20A",
 "thumbnailUrl": "media/map_948045FF_9AD4_3D71_41D3_949F4AE5E20A_t.jpg",
 "width": 8192,
 "fieldOfViewOverlayRadiusScale": 0.14,
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "initialZoomFactor": 1,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/map_948045FF_9AD4_3D71_41D3_949F4AE5E20A.jpeg",
    "class": "ImageResourceLevel",
    "width": 3200,
    "height": 1907
   },
   {
    "url": "media/map_948045FF_9AD4_3D71_41D3_949F4AE5E20A_lq.jpeg",
    "class": "ImageResourceLevel",
    "width": 331,
    "height": 198,
    "tags": "preload"
   }
  ]
 },
 "class": "Map",
 "maximumZoomFactor": 1.2,
 "fieldOfViewOverlayOutsideColor": "#000000",
 "scaleMode": "fit_inside",
 "minimumZoomFactor": 0.5,
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
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -1.76,
  "pitch": -40.45
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_camera",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "120%",
 "label": "UTARA",
 "id": "panorama_820D06B4_887A_31E3_41C0_3B358CD61033",
 "thumbnailUrl": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_t.jpg",
 "hfov": 360,
 "mapLocations": [
  {
   "map": "this.map_948045FF_9AD4_3D71_41D3_949F4AE5E20A",
   "class": "PanoramaMapLocation",
   "angle": 180.67,
   "y": 437.02,
   "x": 3861.91
  }
 ],
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
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
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
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
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
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
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_C55F808D_CBD7_B204_41E2_7B6D59D53B18",
  "this.popup_D53CAF97_DA21_D84F_41DD_FDF7418A4445"
 ]
},
{
 "class": "PlayList",
 "items": [
  "this.PanoramaPlayListItem_CF7A8CCB_DF84_8B51_41E0_9EA7DF9C1D8A",
  "this.PanoramaPlayListItem_CF7B3CCB_DF84_8B51_41A5_DFED56121606",
  "this.PanoramaPlayListItem_CF7B4CCB_DF84_8B51_41C9_DC095C0767FF",
  "this.PanoramaPlayListItem_CF7B9CCB_DF84_8B51_41D4_F24D285CE668",
  "this.PanoramaPlayListItem_CF782CCB_DF84_8B51_41E4_91A40BAF1AA0",
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "class": "PhotoAlbumPlayListItem",
   "media": "this.album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C",
   "player": "this.MainViewerPhotoAlbumPlayer"
  },
  {
   "class": "VideoPlayListItem",
   "end": "this.trigger('tourEnded')",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 6, 0)",
   "media": "this.video_D35F3C5F_DF84_8B71_41DD_04EF32F90DDB",
   "player": "this.MainViewerVideoPlayer",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 6, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 6)"
  }
 ],
 "id": "mainPlayList"
},
{
 "class": "Photo",
 "duration": 0,
 "id": "photo_D3E22D1E_DF6C_931E_41C6_2B1D04E88604",
 "thumbnailUrl": "media/photo_D3E22D1E_DF6C_931E_41C6_2B1D04E88604_t.jpg",
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
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_96C85140_9ACD_D28F_41DA_AEB5717EBF0E_playlist, 0, 1)",
   "media": "this.panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_96C85140_9ACD_D28F_41DA_AEB5717EBF0E_playlist, 1, 2)",
   "media": "this.panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_96C85140_9ACD_D28F_41DA_AEB5717EBF0E_playlist, 2, 3)",
   "media": "this.panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_96C85140_9ACD_D28F_41DA_AEB5717EBF0E_playlist, 3, 4)",
   "media": "this.panorama_82F58ECA_887A_11A7_41C3_CC78280C5471",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_820D06B4_887A_31E3_41C0_3B358CD61033_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_96C85140_9ACD_D28F_41DA_AEB5717EBF0E_playlist, 4, 0)",
   "media": "this.panorama_820D06B4_887A_31E3_41C0_3B358CD61033",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "ThumbnailList_96C85140_9ACD_D28F_41DA_AEB5717EBF0E_playlist"
},
{
 "class": "VideoPlayer",
 "viewerArea": "this.MainViewer",
 "id": "MainViewerVideoPlayer",
 "displayPlaybackBar": true
},
{
 "class": "MapPlayer",
 "viewerArea": "this.MapViewer",
 "id": "MapViewerMapPlayer",
 "movementMode": "constrained"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0.25,
  "pitch": -63.56
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_camera",
 "displayMovements": [
  {
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 1000,
   "easing": "linear"
  },
  {
   "targetPitch": -63.56,
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 3000,
   "targetStereographicFactor": 0,
   "easing": "cubic_in_out"
  }
 ],
 "automaticZoomSpeed": 10,
 "displayOriginPosition": {
  "hfov": 165,
  "class": "RotationalCameraDisplayPosition",
  "yaw": 0.25,
  "stereographicFactor": 1,
  "pitch": -90
 }
},
{
 "class": "ImageResource",
 "id": "ImageResource_C8841E57_DA20_58CF_41E8_6F67382DB7EF",
 "levels": [
  {
   "url": "media/popup_D4ECE477_DA20_68C0_41CD_A106F075B430_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 15360,
   "height": 8640
  },
  {
   "url": "media/popup_D4ECE477_DA20_68C0_41CD_A106F075B430_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 8192,
   "height": 4608
  },
  {
   "url": "media/popup_D4ECE477_DA20_68C0_41CD_A106F075B430_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 4096,
   "height": 2304
  },
  {
   "url": "media/popup_D4ECE477_DA20_68C0_41CD_A106F075B430_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 2048,
   "height": 1152
  },
  {
   "url": "media/popup_D4ECE477_DA20_68C0_41CD_A106F075B430_0_4.jpg",
   "class": "ImageResourceLevel",
   "width": 1024,
   "height": 576
  },
  {
   "url": "media/popup_D4ECE477_DA20_68C0_41CD_A106F075B430_0_5.jpg",
   "class": "ImageResourceLevel",
   "width": 512,
   "height": 288
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0.25,
  "pitch": -40.2
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "class": "MapPlayListItem",
   "media": "this.map_948045FF_9AD4_3D71_41D3_949F4AE5E20A",
   "player": "this.MapViewerMapPlayer"
  }
 ],
 "id": "playList_CF7A3CCB_DF84_8B51_41D1_6028922B7FBC"
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "class": "MapPlayListItem",
   "media": "this.map_948045FF_9AD4_3D71_41D3_949F4AE5E20A",
   "player": "this.MapViewerMapPlayer"
  }
 ],
 "id": "playList_CF7A2CCB_DF84_8B51_41A4_A678998666B9"
},
{
 "hfovMin": "120%",
 "label": "SELATAN",
 "id": "panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D",
 "thumbnailUrl": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_t.jpg",
 "hfov": 360,
 "mapLocations": [
  {
   "map": "this.map_948045FF_9AD4_3D71_41D3_949F4AE5E20A",
   "class": "PanoramaMapLocation",
   "angle": 2.56,
   "y": 4377.87,
   "x": 3364.7
  }
 ],
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
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
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
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
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
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
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_DB3490F5_CBCE_A786_41CA_8CED96A15FC1",
  "this.popup_D4E689B2_DA20_D841_41AD_B793914B75CE"
 ]
},
{
 "class": "Photo",
 "duration": 0,
 "id": "album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_0",
 "thumbnailUrl": "media/album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_0_t.jpg",
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
 "class": "Photo",
 "duration": 0,
 "id": "photo_D3C1307B_DF6C_B127_41E7_9B5123E8974C",
 "thumbnailUrl": "media/photo_D3C1307B_DF6C_B127_41E7_9B5123E8974C_t.jpg",
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
 "hfovMin": "120%",
 "label": "TENGAH",
 "id": "panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9",
 "thumbnailUrl": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_t.jpg",
 "hfov": 360,
 "mapLocations": [
  {
   "map": "this.map_948045FF_9AD4_3D71_41D3_949F4AE5E20A",
   "class": "PanoramaMapLocation",
   "angle": 0,
   "y": 2586.87,
   "x": 4035.07
  }
 ],
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
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
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
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
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
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
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_C466AC2B_CBD5_520C_41E7_4F96E79A6EA2",
  "this.popup_CB20064F_DA20_28DF_41E0_5603979D9489"
 ]
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 7.55,
 "id": "popup_D53CAF97_DA21_D84F_41DD_FDF7418A4445",
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_D53CAF97_DA21_D84F_41DD_FDF7418A4445_0_4.jpg",
    "class": "ImageResourceLevel",
    "width": 1024,
    "height": 576
   }
  ]
 },
 "pitch": -33.9,
 "yaw": -2.06,
 "hideDuration": 500,
 "popupDistance": 100
},
{
 "hfovMin": "120%",
 "label": "TIMUR",
 "id": "panorama_82F58ECA_887A_11A7_41C3_CC78280C5471",
 "thumbnailUrl": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_t.jpg",
 "hfov": 360,
 "mapLocations": [
  {
   "map": "this.map_948045FF_9AD4_3D71_41D3_949F4AE5E20A",
   "class": "PanoramaMapLocation",
   "angle": -80.46,
   "y": 3084.91,
   "x": 5342.82
  }
 ],
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
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
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
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
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
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
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_C687AB0B_CBBA_5E90_41CB_C5B9F4E6304C",
  "this.popup_D4FB5ACC_DA20_59C0_41BC_A38CC46EDC36"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 1.26,
  "pitch": -43.46
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_camera",
 "automaticZoomSpeed": 10
},
{
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "id": "window_C7173E34_DF84_8730_41E6_BADB2FE61939",
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "bodyBackgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "bodyPaddingRight": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 20,
 "headerVerticalAlign": "middle",
 "bodyBackgroundOpacity": 0,
 "titlePaddingLeft": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "modal": true,
 "verticalAlign": "middle",
 "bodyPaddingTop": 0,
 "shadowVerticalLength": 0,
 "backgroundColor": [],
 "titleFontColor": "#000000",
 "title": "",
 "titleFontSize": "1.29vmin",
 "minWidth": 20,
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "closeButtonPressedIconLineWidth": 3,
 "bodyPaddingBottom": 0,
 "titleFontWeight": "normal",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerBorderSize": 0,
 "closeButtonBackgroundColor": [],
 "veilColorRatios": [
  0,
  1
 ],
 "class": "Window",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "shadow": true,
 "titlePaddingTop": 5,
 "propagateClick": false,
 "footerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColor": [],
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerPaddingRight": 0,
 "titlePaddingRight": 5,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "footerBackgroundColorDirection": "vertical",
 "veilColorDirection": "horizontal",
 "children": [
  "this.viewer_uidCF7EBCCB_DF84_8B51_41D0_FDCB6358801A"
 ],
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "closeButtonIconHeight": 20,
 "paddingRight": 0,
 "borderSize": 0,
 "titleFontFamily": "Arial",
 "footerHeight": 5,
 "shadowHorizontalLength": 3,
 "headerPaddingBottom": 5,
 "titleFontStyle": "normal",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonIconColor": "#B2B2B2",
 "headerBorderColor": "#000000",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "shadowBlurRadius": 6,
 "headerPaddingTop": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "closeButtonBorderRadius": 11,
 "gap": 10,
 "shadowOpacity": 0.5,
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingLeft": 10,
 "closeButtonRollOverBackgroundColor": [],
 "headerBackgroundOpacity": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "bodyPaddingLeft": 0,
 "layout": "vertical",
 "closeButtonIconLineWidth": 2,
 "paddingBottom": 0,
 "titleTextDecoration": "none",
 "data": {
  "name": "Window2373"
 },
 "horizontalAlign": "center",
 "titlePaddingBottom": 5,
 "scrollBarWidth": 10,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "borderRadius": 5,
 "closeButtonPressedIconColor": "#FFFFFF",
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 20
},
{
 "class": "Photo",
 "duration": 0,
 "id": "photo_D41C13A7_DF6C_B72F_41D1_75C429856E23",
 "thumbnailUrl": "media/photo_D41C13A7_DF6C_B72F_41D1_75C429856E23_t.jpg",
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
 "class": "Photo",
 "duration": 0,
 "id": "album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_1",
 "thumbnailUrl": "media/album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_1_t.jpg",
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
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 7.58,
 "id": "popup_D4ECE477_DA20_68C0_41CD_A106F075B430",
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_D4ECE477_DA20_68C0_41CD_A106F075B430_0_4.jpg",
    "class": "ImageResourceLevel",
    "width": 1024,
    "height": 576
   }
  ]
 },
 "pitch": -33.49,
 "yaw": 3.49,
 "hideDuration": 500,
 "popupDistance": 100
},
{
 "class": "ImageResource",
 "id": "ImageResource_C88B0E58_DA20_58C1_41E8_2F51AF5FB5D7",
 "levels": [
  {
   "url": "media/popup_D4E689B2_DA20_D841_41AD_B793914B75CE_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 15360,
   "height": 8640
  },
  {
   "url": "media/popup_D4E689B2_DA20_D841_41AD_B793914B75CE_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 8192,
   "height": 4608
  },
  {
   "url": "media/popup_D4E689B2_DA20_D841_41AD_B793914B75CE_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 4096,
   "height": 2304
  },
  {
   "url": "media/popup_D4E689B2_DA20_D841_41AD_B793914B75CE_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 2048,
   "height": 1152
  },
  {
   "url": "media/popup_D4E689B2_DA20_D841_41AD_B793914B75CE_0_4.jpg",
   "class": "ImageResourceLevel",
   "width": 1024,
   "height": 576
  },
  {
   "url": "media/popup_D4E689B2_DA20_D841_41AD_B793914B75CE_0_5.jpg",
   "class": "ImageResourceLevel",
   "width": 512,
   "height": 288
  }
 ]
},
{
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "id": "window_CE73AB68_DF6C_9721_41E7_82DE9F5DADF7",
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "bodyBackgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "width": 400,
 "bodyPaddingRight": 0,
 "closeButtonPaddingTop": 0,
 "minHeight": 20,
 "headerVerticalAlign": "middle",
 "bodyBackgroundOpacity": 0,
 "scrollBarVisible": "rollOver",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "modal": true,
 "verticalAlign": "middle",
 "titlePaddingLeft": 5,
 "shadowVerticalLength": 0,
 "height": 600,
 "titleFontColor": "#000000",
 "bodyPaddingTop": 0,
 "titleFontSize": "1.29vmin",
 "minWidth": 20,
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "closeButtonPressedIconLineWidth": 3,
 "closeButtonBorderColor": "#000000",
 "bodyPaddingBottom": 0,
 "titleFontWeight": "normal",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerBorderSize": 0,
 "closeButtonBackgroundColor": [],
 "title": "",
 "closeButtonBackgroundColorDirection": "vertical",
 "veilColorRatios": [
  0,
  1
 ],
 "class": "Window",
 "backgroundColor": [],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "shadow": true,
 "titlePaddingTop": 5,
 "propagateClick": false,
 "footerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColor": [],
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerPaddingRight": 0,
 "titlePaddingRight": 5,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "footerBackgroundColorDirection": "vertical",
 "veilColorDirection": "horizontal",
 "children": [
  "this.container_CF706CCB_DF84_8B51_41E3_F22F26674E5B"
 ],
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "closeButtonIconHeight": 20,
 "bodyBorderSize": 0,
 "paddingRight": 0,
 "borderSize": 0,
 "titleFontFamily": "Arial",
 "footerHeight": 5,
 "shadowHorizontalLength": 3,
 "headerPaddingBottom": 5,
 "titleFontStyle": "normal",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonIconColor": "#000000",
 "headerBorderColor": "#000000",
 "closeButtonBackgroundOpacity": 1,
 "closeButtonPaddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "shadowBlurRadius": 6,
 "headerPaddingTop": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "closeButtonPaddingLeft": 0,
 "closeButtonBorderRadius": 11,
 "gap": 10,
 "footerBorderColor": "#000000",
 "closeButtonBorderSize": 0,
 "shadowOpacity": 0.5,
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingLeft": 10,
 "closeButtonRollOverBackgroundColor": [],
 "headerBackgroundOpacity": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "bodyPaddingLeft": 0,
 "layout": "vertical",
 "closeButtonIconLineWidth": 2,
 "paddingBottom": 0,
 "titleTextDecoration": "none",
 "closeButtonPaddingBottom": 0,
 "data": {
  "name": "Window4199"
 },
 "horizontalAlign": "center",
 "titlePaddingBottom": 5,
 "backgroundColorRatios": [],
 "borderRadius": 5,
 "closeButtonPressedIconColor": "#FFFFFF",
 "scrollBarWidth": 10,
 "closeButtonIconWidth": 20,
 "bodyBorderColor": "#000000",
 "footerBorderSize": 0
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "VideoPlayListItem",
   "start": "this.viewer_uidCF7EBCCB_DF84_8B51_41D0_FDCB6358801AVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_CD6FEA58_DF84_8F70_41CD_39B9FC10D679, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_CD6FEA58_DF84_8F70_41CD_39B9FC10D679, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uidCF7EBCCB_DF84_8B51_41D0_FDCB6358801AVideoPlayer)",
   "media": "this.video_D35F3C5F_DF84_8B71_41DD_04EF32F90DDB",
   "player": "this.viewer_uidCF7EBCCB_DF84_8B51_41D0_FDCB6358801AVideoPlayer"
  }
 ],
 "id": "playList_CD6FEA58_DF84_8F70_41CD_39B9FC10D679"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0.75,
  "pitch": -30.9
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_820D06B4_887A_31E3_41C0_3B358CD61033_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaPlayer",
 "viewerArea": "this.MainViewer",
 "displayPlaybackBar": true,
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "mouseControlMode": "drag_acceleration"
},
{
 "class": "Video",
 "label": "3D Konsep Galangan",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_D35F3C5F_DF84_8B71_41DD_04EF32F90DDB_t.jpg",
 "width": 1920,
 "loop": false,
 "id": "video_D35F3C5F_DF84_8B71_41DD_04EF32F90DDB",
 "height": 1080,
 "video": {
  "width": 1920,
  "class": "VideoResource",
  "height": 1080,
  "mp4Url": "media/video_D35F3C5F_DF84_8B71_41DD_04EF32F90DDB.mp4"
 }
},
{
 "class": "ImageResource",
 "id": "ImageResource_C8899E5E_DA20_58C0_41DA_C3A6623CCF1A",
 "levels": [
  {
   "url": "media/popup_D53CAF97_DA21_D84F_41DD_FDF7418A4445_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 15360,
   "height": 8640
  },
  {
   "url": "media/popup_D53CAF97_DA21_D84F_41DD_FDF7418A4445_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 8192,
   "height": 4608
  },
  {
   "url": "media/popup_D53CAF97_DA21_D84F_41DD_FDF7418A4445_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 4096,
   "height": 2304
  },
  {
   "url": "media/popup_D53CAF97_DA21_D84F_41DD_FDF7418A4445_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 2048,
   "height": 1152
  },
  {
   "url": "media/popup_D53CAF97_DA21_D84F_41DD_FDF7418A4445_0_4.jpg",
   "class": "ImageResourceLevel",
   "width": 1024,
   "height": 576
  },
  {
   "url": "media/popup_D53CAF97_DA21_D84F_41DD_FDF7418A4445_0_5.jpg",
   "class": "ImageResourceLevel",
   "width": 512,
   "height": 288
  }
 ]
},
{
 "class": "Photo",
 "duration": 0,
 "id": "album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_2",
 "thumbnailUrl": "media/album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_2_t.jpg",
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
 "class": "PhotoAlbum",
 "id": "album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C",
 "thumbnailUrl": "media/album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_t.png",
 "playList": "this.album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_AlbumPlayList",
 "label": "Photo Album PETA FOTO UDARA"
},
{
 "class": "PlayList",
 "change": "this.showComponentsWhileMouseOver(this.container_CF706CCB_DF84_8B51_41E3_F22F26674E5B, [this.htmltext_CF704CCB_DF84_8B51_41CD_E3B15F0A60FD,this.component_CF708CCB_DF84_8B51_41DF_FC83E6D33BB4,this.component_CF709CCB_DF84_8B51_41CE_B8166CE90262], 2000)",
 "items": [
  "this.albumitem_CF725CCB_DF84_8B51_41E2_679D94E9286E"
 ],
 "id": "playList_D12966A8_DF84_87DF_41CA_FAC87B0D1B7F"
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 5.35,
 "id": "popup_CB20064F_DA20_28DF_41E0_5603979D9489",
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_CB20064F_DA20_28DF_41E0_5603979D9489_0_4.jpg",
    "class": "ImageResourceLevel",
    "width": 1024,
    "height": 576
   }
  ]
 },
 "pitch": -68.91,
 "yaw": 0.34,
 "hideDuration": 500,
 "popupDistance": 100
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 7.58,
 "id": "popup_D4E689B2_DA20_D841_41AD_B793914B75CE",
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_D4E689B2_DA20_D841_41AD_B793914B75CE_0_4.jpg",
    "class": "ImageResourceLevel",
    "width": 1024,
    "height": 576
   }
  ]
 },
 "pitch": -33.49,
 "yaw": 3.49,
 "hideDuration": 500,
 "popupDistance": 100
},
{
 "class": "Photo",
 "duration": 0,
 "id": "album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_3",
 "thumbnailUrl": "media/album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_3_t.jpg",
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
 "class": "ImageResource",
 "id": "ImageResource_C88A9E5E_DA20_58C0_41E2_57D3E2FAB3FD",
 "levels": [
  {
   "url": "media/popup_D4FB5ACC_DA20_59C0_41BC_A38CC46EDC36_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 15360,
   "height": 8640
  },
  {
   "url": "media/popup_D4FB5ACC_DA20_59C0_41BC_A38CC46EDC36_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 8192,
   "height": 4608
  },
  {
   "url": "media/popup_D4FB5ACC_DA20_59C0_41BC_A38CC46EDC36_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 4096,
   "height": 2304
  },
  {
   "url": "media/popup_D4FB5ACC_DA20_59C0_41BC_A38CC46EDC36_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 2048,
   "height": 1152
  },
  {
   "url": "media/popup_D4FB5ACC_DA20_59C0_41BC_A38CC46EDC36_0_4.jpg",
   "class": "ImageResourceLevel",
   "width": 1024,
   "height": 576
  },
  {
   "url": "media/popup_D4FB5ACC_DA20_59C0_41BC_A38CC46EDC36_0_5.jpg",
   "class": "ImageResourceLevel",
   "width": 512,
   "height": 288
  }
 ]
},
{
 "hfovMin": "120%",
 "label": "BARAT",
 "id": "panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4",
 "thumbnailUrl": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_t.jpg",
 "hfov": 360,
 "mapLocations": [
  {
   "map": "this.map_948045FF_9AD4_3D71_41D3_949F4AE5E20A",
   "class": "PanoramaMapLocation",
   "angle": 95.11,
   "y": 2680.58,
   "x": 2377.01
  }
 ],
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
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
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
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
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
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
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_DA809F54_CBD5_4E04_41C0_3BC1488DB74A",
  "this.popup_D4ECE477_DA20_68C0_41CD_A106F075B430"
 ]
},
{
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "MainViewer",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "toolTipFontSize": "30px",
 "toolTipOpacity": 1,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "minHeight": 50,
 "width": "100%",
 "playbackBarRight": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "minWidth": 100,
 "progressBarBorderSize": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "class": "ViewerArea",
 "shadow": false,
 "playbackBarBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "paddingRight": 0,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#333333",
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "paddingTop": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "paddingBottom": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 5,
 "data": {
  "name": "Main Viewer"
 },
 "progressBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowSpread": 0
},
{
 "data": {
  "name": "ThumbnailList35762"
 },
 "rollOverItemLabelFontWeight": "bold",
 "id": "ThumbnailList_96C85140_9ACD_D28F_41DA_AEB5717EBF0E",
 "left": "0%",
 "itemLabelGap": 8,
 "paddingLeft": 20,
 "itemLabelHorizontalAlign": "center",
 "paddingRight": 20,
 "scrollBarColor": "#FFFFFF",
 "scrollBarVisible": "rollOver",
 "itemThumbnailShadowHorizontalLength": 3,
 "borderSize": 0,
 "itemLabelFontStyle": "normal",
 "itemPaddingRight": 3,
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "itemLabelFontWeight": "normal",
 "itemLabelFontFamily": "Arial",
 "playList": "this.ThumbnailList_96C85140_9ACD_D28F_41DA_AEB5717EBF0E_playlist",
 "itemLabelTextDecoration": "none",
 "itemBorderRadius": 0,
 "itemThumbnailShadowVerticalLength": 3,
 "scrollBarMargin": 2,
 "width": "100%",
 "itemThumbnailShadowBlurRadius": 8,
 "bottom": "0%",
 "verticalAlign": "top",
 "selectedItemLabelFontWeight": "bold",
 "minWidth": 1,
 "itemVerticalAlign": "middle",
 "itemLabelFontSize": 14,
 "itemOpacity": 1,
 "itemThumbnailShadowOpacity": 0.57,
 "itemPaddingLeft": 3,
 "itemLabelPosition": "bottom",
 "itemMode": "normal",
 "itemThumbnailScaleMode": "fit_outside",
 "backgroundOpacity": 0,
 "height": 133.05,
 "selectedItemLabelFontColor": "#FFCC00",
 "itemLabelFontColor": "#FFFFFF",
 "gap": 13,
 "itemThumbnailHeight": 75,
 "itemBackgroundOpacity": 0,
 "itemThumbnailShadowSpread": 1,
 "itemHorizontalAlign": "center",
 "paddingTop": 10,
 "layout": "horizontal",
 "itemThumbnailBorderRadius": 5,
 "class": "ThumbnailList",
 "shadow": false,
 "paddingBottom": 10,
 "itemBackgroundColorDirection": "vertical",
 "itemPaddingTop": 3,
 "itemThumbnailOpacity": 1,
 "horizontalAlign": "center",
 "itemBackgroundColor": [],
 "itemPaddingBottom": 3,
 "scrollBarWidth": 10,
 "borderRadius": 5,
 "itemThumbnailShadowColor": "#000000",
 "itemBackgroundColorRatios": [],
 "propagateClick": false,
 "itemThumbnailShadow": true,
 "itemThumbnailWidth": 100
},
{
 "id": "HTMLText_975BA4D8_9ACC_33BF_41B6_E382D41A8D4A",
 "scrollBarColor": "#000000",
 "paddingLeft": 20,
 "paddingRight": 20,
 "right": "0.01%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "top": "0%",
 "minWidth": 1,
 "width": "23.162%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingTop": 20,
 "class": "HTMLText",
 "height": "11.907%",
 "shadow": false,
 "paddingBottom": 20,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:right;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0000cc;font-size:27px;\"><B>FOTO UDARA 360 </B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:right;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:22px;\"><B>PT. GALANGAN LANCAR ABADI</B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText53815"
 },
 "propagateClick": false,
 "borderRadius": 0,
 "scrollBarWidth": 10
},
{
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "MapViewer",
 "left": "0%",
 "paddingLeft": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "30px",
 "toolTipOpacity": 1,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "minHeight": 1,
 "width": "24.487%",
 "playbackBarRight": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "minWidth": 1,
 "progressBarBorderSize": 0,
 "playbackBarBorderRadius": 0,
 "height": "31.643%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "shadow": false,
 "playbackBarBorderSize": 0,
 "class": "ViewerArea",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "paddingRight": 0,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#333333",
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "top": "0%",
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "paddingTop": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "paddingBottom": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "data": {
  "name": "MapViewer"
 },
 "progressBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowSpread": 0
},
{
 "transparencyActive": true,
 "maxHeight": 128,
 "maxWidth": 128,
 "toolTipShadowVerticalLength": 0,
 "toolTipBorderColor": "#767676",
 "id": "IconButton_DB947932_CBD5_721C_4181_10D28E6E6BBF",
 "toolTipOpacity": 1,
 "paddingRight": 0,
 "toolTipFontSize": "30px",
 "right": "2.96%",
 "toolTipBackgroundColor": "#F6F6F6",
 "paddingLeft": 0,
 "toolTipShadowBlurRadius": 3,
 "borderSize": 0,
 "toolTipTextShadowColor": "#000000",
 "width": 70,
 "minHeight": 1,
 "toolTip": "Fullscreen",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "toolTipPaddingBottom": 4,
 "toolTipFontColor": "#333333",
 "iconURL": "skin/IconButton_DB947932_CBD5_721C_4181_10D28E6E6BBF.png",
 "toolTipShadowColor": "#333333",
 "bottom": "1.98%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "toolTipBorderSize": 1,
 "mode": "toggle",
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "backgroundOpacity": 0,
 "toolTipDisplayTime": 600,
 "toolTipShadowOpacity": 1,
 "toolTipBorderRadius": 3,
 "paddingTop": 0,
 "toolTipFontStyle": "normal",
 "class": "IconButton",
 "height": 70,
 "shadow": false,
 "paddingBottom": 0,
 "toolTipPaddingRight": 6,
 "data": {
  "name": "IconButton1493"
 },
 "horizontalAlign": "center",
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "toolTipShadowHorizontalLength": 0,
 "toolTipShadowSpread": 0
},
{
 "transparencyActive": false,
 "maxHeight": 101,
 "maxWidth": 101,
 "toolTipShadowVerticalLength": 0,
 "toolTipBorderColor": "#767676",
 "id": "IconButton_DD3B0FDD_CC2C_CE04_41CC_8A134CB1896A",
 "toolTipOpacity": 1,
 "paddingRight": 0,
 "toolTipFontSize": "30px",
 "right": "8.44%",
 "toolTipBackgroundColor": "#F6F6F6",
 "paddingLeft": 0,
 "toolTipShadowBlurRadius": 3,
 "borderSize": 0,
 "toolTipTextShadowColor": "#000000",
 "width": 70,
 "minHeight": 1,
 "toolTip": "Album Gambar",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "toolTipPaddingBottom": 4,
 "toolTipFontColor": "#333333",
 "iconURL": "skin/IconButton_DD3B0FDD_CC2C_CE04_41CC_8A134CB1896A.png",
 "toolTipShadowColor": "#333333",
 "bottom": "1.87%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "toolTipBorderSize": 1,
 "mode": "push",
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "backgroundOpacity": 0,
 "toolTipDisplayTime": 600,
 "toolTipShadowOpacity": 1,
 "toolTipBorderRadius": 3,
 "paddingTop": 0,
 "click": "this.showPopupMedia(this.window_CE73AB68_DF6C_9721_41E7_82DE9F5DADF7, this.album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C, this.playList_D12966A8_DF84_87DF_41CA_FAC87B0D1B7F, '90%', '90%', false, false)",
 "toolTipFontStyle": "normal",
 "class": "IconButton",
 "height": 70.03,
 "shadow": false,
 "paddingBottom": 0,
 "toolTipPaddingRight": 6,
 "data": {
  "name": "IconButton12181"
 },
 "horizontalAlign": "center",
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "toolTipShadowHorizontalLength": 0,
 "toolTipShadowSpread": 0
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "toolTipShadowVerticalLength": 0,
 "scaleMode": "fit_inside",
 "toolTipBorderColor": "#767676",
 "id": "Image_CAE00CC7_DA20_59CF_41E6_248AF0EE22D0",
 "toolTipOpacity": 1,
 "paddingRight": 0,
 "toolTipFontSize": "30px",
 "right": "13.39%",
 "toolTipBackgroundColor": "#F6F6F6",
 "paddingLeft": 0,
 "toolTipShadowBlurRadius": 3,
 "borderSize": 0,
 "toolTipTextShadowColor": "#000000",
 "width": 70,
 "minHeight": 1,
 "toolTip": "Putar Video",
 "url": "skin/Image_CAE00CC7_DA20_59CF_41E6_248AF0EE22D0.png",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "toolTipPaddingBottom": 4,
 "toolTipFontColor": "#333333",
 "toolTipShadowColor": "#333333",
 "bottom": "2.09%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "backgroundOpacity": 0,
 "toolTipDisplayTime": 600,
 "toolTipShadowOpacity": 1,
 "toolTipBorderRadius": 3,
 "paddingTop": 0,
 "click": "this.showPopupMedia(this.window_C7173E34_DF84_8730_41E6_BADB2FE61939, this.video_D35F3C5F_DF84_8B71_41DD_04EF32F90DDB, this.playList_CD6FEA58_DF84_8F70_41CD_39B9FC10D679, '90%', '90%', false, true)",
 "toolTipFontStyle": "normal",
 "class": "Image",
 "height": 70,
 "shadow": false,
 "paddingBottom": 0,
 "toolTipPaddingRight": 6,
 "data": {
  "name": "Image7438"
 },
 "horizontalAlign": "center",
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "borderRadius": 0,
 "toolTipShadowHorizontalLength": 0,
 "toolTipShadowSpread": 0
},
{
 "id": "veilPopupPanorama",
 "left": 0,
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "right": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 0,
 "top": 0,
 "bottom": 0,
 "minWidth": 0,
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 350,
  "easing": "cubic_in_out"
 },
 "backgroundOpacity": 0.55,
 "backgroundColor": [
  "#000000"
 ],
 "paddingTop": 0,
 "class": "UIComponent",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "UIComponent3225"
 },
 "visible": false,
 "propagateClick": false,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ]
},
{
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "right": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 0,
 "top": 0,
 "bottom": 0,
 "minWidth": 0,
 "backgroundOpacity": 1,
 "backgroundColor": [],
 "paddingTop": 0,
 "class": "ZoomImage",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "ZoomImage3226"
 },
 "visible": false,
 "propagateClick": false,
 "scaleMode": "custom",
 "borderRadius": 0,
 "backgroundColorRatios": []
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "rollOverIconColor": "#666666",
 "data": {
  "name": "CloseButton3227"
 },
 "id": "closeButtonPopupPanorama",
 "backgroundColorDirection": "vertical",
 "paddingRight": 5,
 "fontFamily": "Arial",
 "right": 10,
 "paddingLeft": 5,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "iconHeight": 20,
 "minHeight": 0,
 "verticalAlign": "middle",
 "top": 10,
 "borderColor": "#000000",
 "iconColor": "#000000",
 "shadowBlurRadius": 6,
 "minWidth": 0,
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 350,
  "easing": "cubic_in_out"
 },
 "mode": "push",
 "fontSize": "1.29vmin",
 "iconLineWidth": 5,
 "iconBeforeLabel": true,
 "backgroundOpacity": 0.3,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 5,
 "label": "",
 "pressedIconColor": "#888888",
 "class": "CloseButton",
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "layout": "horizontal",
 "shadow": false,
 "paddingBottom": 5,
 "fontStyle": "normal",
 "horizontalAlign": "center",
 "shadowSpread": 1,
 "visible": false,
 "propagateClick": false,
 "borderRadius": 0,
 "iconWidth": 20,
 "cursor": "hand",
 "fontWeight": "normal"
},
{
 "map": {
  "width": 386.99,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_948045FF_9AD4_3D71_41D3_949F4AE5E20A_HS_0_map.gif",
     "class": "ImageResourceLevel",
     "width": 18,
     "height": 16
    }
   ]
  },
  "y": 2419.98,
  "x": 3841.57,
  "offsetY": 0,
  "height": 333.77,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "image": {
  "class": "HotspotMapOverlayImage",
  "height": 333.77,
  "y": 2419.98,
  "width": 386.99,
  "x": 3841.57,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_948045FF_9AD4_3D71_41D3_949F4AE5E20A_HS_0.png",
     "class": "ImageResourceLevel",
     "width": 151,
     "height": 130
    }
   ]
  }
 },
 "useHandCursor": true,
 "id": "overlay_97266B35_9AD4_56F1_41E0_5FEC6491E0E7",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "map": {
  "width": 386.99,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_948045FF_9AD4_3D71_41D3_949F4AE5E20A_HS_1_map.gif",
     "class": "ImageResourceLevel",
     "width": 18,
     "height": 16
    }
   ]
  },
  "y": 2513.69,
  "x": 2183.51,
  "offsetY": 0,
  "height": 333.77,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "image": {
  "class": "HotspotMapOverlayImage",
  "height": 333.77,
  "y": 2513.69,
  "width": 386.99,
  "x": 2183.51,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_948045FF_9AD4_3D71_41D3_949F4AE5E20A_HS_1.png",
     "class": "ImageResourceLevel",
     "width": 151,
     "height": 130
    }
   ]
  }
 },
 "useHandCursor": true,
 "id": "overlay_8AA26D8D_9ADC_4D91_41C4_B242DE053430",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "map": {
  "width": 386.99,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_948045FF_9AD4_3D71_41D3_949F4AE5E20A_HS_2_map.gif",
     "class": "ImageResourceLevel",
     "width": 18,
     "height": 16
    }
   ]
  },
  "y": 270.14,
  "x": 3668.42,
  "offsetY": 0,
  "height": 333.77,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "image": {
  "class": "HotspotMapOverlayImage",
  "height": 333.77,
  "y": 270.14,
  "width": 386.99,
  "x": 3668.42,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_948045FF_9AD4_3D71_41D3_949F4AE5E20A_HS_2.png",
     "class": "ImageResourceLevel",
     "width": 151,
     "height": 130
    }
   ]
  }
 },
 "useHandCursor": true,
 "id": "overlay_8A10C3E3_9ADC_5591_41D3_5727B8194571",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "map": {
  "width": 386.99,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_948045FF_9AD4_3D71_41D3_949F4AE5E20A_HS_3_map.gif",
     "class": "ImageResourceLevel",
     "width": 18,
     "height": 16
    }
   ]
  },
  "y": 2918.02,
  "x": 5149.33,
  "offsetY": 0,
  "height": 333.77,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "image": {
  "class": "HotspotMapOverlayImage",
  "height": 333.77,
  "y": 2918.02,
  "width": 386.99,
  "x": 5149.33,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_948045FF_9AD4_3D71_41D3_949F4AE5E20A_HS_3.png",
     "class": "ImageResourceLevel",
     "width": 151,
     "height": 130
    }
   ]
  }
 },
 "useHandCursor": true,
 "id": "overlay_8A5672F0_9ADC_578F_41E1_8C1A9C619654",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "map": {
  "width": 386.99,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_948045FF_9AD4_3D71_41D3_949F4AE5E20A_HS_4_map.gif",
     "class": "ImageResourceLevel",
     "width": 18,
     "height": 16
    }
   ]
  },
  "y": 4210.98,
  "x": 3171.2,
  "offsetY": 0,
  "height": 333.77,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "image": {
  "class": "HotspotMapOverlayImage",
  "height": 333.77,
  "y": 4210.98,
  "width": 386.99,
  "x": 3171.2,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_948045FF_9AD4_3D71_41D3_949F4AE5E20A_HS_4.png",
     "class": "ImageResourceLevel",
     "width": 151,
     "height": 130
    }
   ]
  }
 },
 "useHandCursor": true,
 "id": "overlay_8B108C64_9ADC_5297_41D5_141AEF8C1B24",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "Desain Rencana",
   "click": "this.showPopupPanoramaOverlay(this.popup_D53CAF97_DA21_D84F_41DD_FDF7418A4445, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'paddingLeft':5,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverBorderSize':0,'borderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'paddingBottom':5,'rollOverBackgroundColorDirection':'vertical','iconHeight':20,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'rollOverIconWidth':20,'iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_C8899E5E_DA20_58C0_41DA_C3A6623CCF1A, null, null, null, null, false)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.55,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 206,
      "height": 158
     }
    ]
   },
   "pitch": -33.9,
   "yaw": -2.06
  }
 ],
 "id": "overlay_C55F808D_CBD7_B204_41E2_7B6D59D53B18",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 7.55,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.06,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 20,
      "height": 16
     }
    ]
   },
   "pitch": -33.9
  }
 ]
},
{
 "class": "PanoramaPlayListItem",
 "camera": "this.panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_CF7A8CCB_DF84_8B51_41E0_9EA7DF9C1D8A, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1)",
 "media": "this.panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_CF7A8CCB_DF84_8B51_41E0_9EA7DF9C1D8A"
},
{
 "class": "PanoramaPlayListItem",
 "camera": "this.panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_CF7B3CCB_DF84_8B51_41A5_DFED56121606, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 2)",
 "media": "this.panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_CF7B3CCB_DF84_8B51_41A5_DFED56121606"
},
{
 "class": "PanoramaPlayListItem",
 "camera": "this.panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_CF7B4CCB_DF84_8B51_41C9_DC095C0767FF, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 2, 3)",
 "media": "this.panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_CF7B4CCB_DF84_8B51_41C9_DC095C0767FF"
},
{
 "class": "PanoramaPlayListItem",
 "camera": "this.panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_CF7B9CCB_DF84_8B51_41D4_F24D285CE668, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 3, 4)",
 "media": "this.panorama_82F58ECA_887A_11A7_41C3_CC78280C5471",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_CF7B9CCB_DF84_8B51_41D4_F24D285CE668"
},
{
 "class": "PanoramaPlayListItem",
 "camera": "this.panorama_820D06B4_887A_31E3_41C0_3B358CD61033_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_CF782CCB_DF84_8B51_41E4_91A40BAF1AA0, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 4, 5)",
 "media": "this.panorama_820D06B4_887A_31E3_41C0_3B358CD61033",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_CF782CCB_DF84_8B51_41E4_91A40BAF1AA0"
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "Desain Rencana",
   "click": "this.showPopupPanoramaOverlay(this.popup_D4E689B2_DA20_D841_41AD_B793914B75CE, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'paddingLeft':5,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverBorderSize':0,'borderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'paddingBottom':5,'rollOverBackgroundColorDirection':'vertical','iconHeight':20,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'rollOverIconWidth':20,'iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_C88B0E58_DA20_58C1_41E8_2F51AF5FB5D7, null, null, null, null, false)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.58,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 206,
      "height": 158
     }
    ]
   },
   "pitch": -33.49,
   "yaw": 3.49
  }
 ],
 "id": "overlay_DB3490F5_CBCE_A786_41CA_8CED96A15FC1",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 7.58,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 3.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 20,
      "height": 16
     }
    ]
   },
   "pitch": -33.49
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "Desain Rencana",
   "click": "this.showPopupPanoramaOverlay(this.popup_CB20064F_DA20_28DF_41E0_5603979D9489, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'paddingLeft':5,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverBorderSize':0,'borderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'paddingBottom':5,'rollOverBackgroundColorDirection':'vertical','iconHeight':20,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'rollOverIconWidth':20,'iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_C886EE57_DA20_58CF_41D1_63411F86D6F3, null, null, null, null, false)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.35,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 338,
      "height": 238
     }
    ]
   },
   "pitch": -68.91,
   "yaw": 0.34
  }
 ],
 "id": "overlay_C466AC2B_CBD5_520C_41E7_4F96E79A6EA2",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 5.35,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.34,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 22,
      "height": 16
     }
    ]
   },
   "pitch": -68.91
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "Desain Rencana",
   "click": "this.showPopupPanoramaOverlay(this.popup_D4FB5ACC_DA20_59C0_41BC_A38CC46EDC36, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'paddingLeft':5,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverBorderSize':0,'borderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'paddingBottom':5,'rollOverBackgroundColorDirection':'vertical','iconHeight':20,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'rollOverIconWidth':20,'iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_C88A9E5E_DA20_58C0_41E2_57D3E2FAB3FD, null, null, null, null, false)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.55,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 206,
      "height": 158
     }
    ]
   },
   "pitch": -33.9,
   "yaw": -2.06
  }
 ],
 "id": "overlay_C687AB0B_CBBA_5E90_41CB_C5B9F4E6304C",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 7.55,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.06,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 20,
      "height": 16
     }
    ]
   },
   "pitch": -33.9
  }
 ]
},
{
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "viewer_uidCF7EBCCB_DF84_8B51_41D0_FDCB6358801A",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "toolTipFontSize": "1.11vmin",
 "toolTipOpacity": 1,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "minHeight": 50,
 "width": "100%",
 "playbackBarRight": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "minWidth": 100,
 "progressBarBorderSize": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "class": "ViewerArea",
 "shadow": false,
 "playbackBarBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "paddingRight": 0,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "paddingTop": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "paddingBottom": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "data": {
  "name": "ViewerArea3224"
 },
 "progressBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowSpread": 0
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.viewer_uidCF724CCB_DF84_8B51_41E8_812AA3F24B40",
  {
   "scrollBarWidth": 7,
   "children": [
    "this.htmltext_CF704CCB_DF84_8B51_41CD_E3B15F0A60FD"
   ],
   "scrollBarOpacity": 0.5,
   "left": 0,
   "backgroundColorDirection": "vertical",
   "paddingRight": 0,
   "scrollBarColor": "#FFFFFF",
   "right": 0,
   "paddingLeft": 0,
   "borderSize": 0,
   "scrollBarVisible": "rollOver",
   "minHeight": 20,
   "scrollBarMargin": 2,
   "bottom": 0,
   "verticalAlign": "bottom",
   "minWidth": 20,
   "contentOpaque": true,
   "backgroundOpacity": 0.3,
   "gap": 10,
   "paddingTop": 0,
   "layout": "vertical",
   "class": "Container",
   "backgroundColor": [],
   "shadow": false,
   "paddingBottom": 0,
   "data": {
    "name": "Container3220"
   },
   "horizontalAlign": "left",
   "height": "30%",
   "propagateClick": false,
   "borderRadius": 0,
   "overflow": "scroll",
   "backgroundColorRatios": []
  },
  "this.component_CF708CCB_DF84_8B51_41DF_FC83E6D33BB4",
  "this.component_CF709CCB_DF84_8B51_41CE_B8166CE90262"
 ],
 "id": "container_CF706CCB_DF84_8B51_41E3_F22F26674E5B",
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 20,
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "minWidth": 20,
 "width": "100%",
 "contentOpaque": false,
 "backgroundOpacity": 0.3,
 "gap": 10,
 "paddingTop": 0,
 "layout": "absolute",
 "class": "Container",
 "backgroundColor": [],
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Container3219"
 },
 "horizontalAlign": "left",
 "height": "100%",
 "propagateClick": false,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": []
},
{
 "class": "VideoPlayer",
 "viewerArea": "this.viewer_uidCF7EBCCB_DF84_8B51_41D0_FDCB6358801A",
 "id": "viewer_uidCF7EBCCB_DF84_8B51_41D0_FDCB6358801AVideoPlayer",
 "displayPlaybackBar": true
},
{
 "class": "PhotoPlayList",
 "items": [
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.47",
     "zoomFactor": 1.5,
     "y": "0.40"
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "duration": 0,
    "scaleMode": "fit_inside",
    "easing": "linear"
   },
   "class": "PhotoPlayListItem",
   "media": "this.album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_0"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.34",
     "zoomFactor": 1.5,
     "y": "0.73"
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "duration": 0,
    "scaleMode": "fit_inside",
    "easing": "linear"
   },
   "class": "PhotoPlayListItem",
   "media": "this.album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_1"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.36",
     "zoomFactor": 1.5,
     "y": "0.28"
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "duration": 0,
    "scaleMode": "fit_inside",
    "easing": "linear"
   },
   "class": "PhotoPlayListItem",
   "media": "this.album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_2"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.40",
     "zoomFactor": 1.5,
     "y": "0.60"
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "duration": 0,
    "scaleMode": "fit_inside",
    "easing": "linear"
   },
   "class": "PhotoPlayListItem",
   "media": "this.album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_3"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.42",
     "zoomFactor": 1.5,
     "y": "0.64"
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "duration": 0,
    "scaleMode": "fit_inside",
    "easing": "linear"
   },
   "class": "PhotoPlayListItem",
   "media": "this.album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_4"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.71",
     "zoomFactor": 1.5,
     "y": "0.48"
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "duration": 0,
    "scaleMode": "fit_inside",
    "easing": "linear"
   },
   "class": "PhotoPlayListItem",
   "media": "this.photo_D41C13A7_DF6C_B72F_41D1_75C429856E23"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.45",
     "zoomFactor": 1.5,
     "y": "0.60"
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "duration": 0,
    "scaleMode": "fit_inside",
    "easing": "linear"
   },
   "class": "PhotoPlayListItem",
   "media": "this.photo_D3C1307B_DF6C_B127_41E7_9B5123E8974C"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.61",
     "zoomFactor": 1.5,
     "y": "0.73"
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "duration": 0,
    "scaleMode": "fit_inside",
    "easing": "linear"
   },
   "class": "PhotoPlayListItem",
   "media": "this.photo_D3E22D1E_DF6C_931E_41C6_2B1D04E88604"
  }
 ],
 "id": "album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_AlbumPlayList"
},
{
 "class": "PhotoAlbumPlayListItem",
 "begin": "this.updateMediaLabelFromPlayList(this.album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_AlbumPlayList, this.htmltext_CF704CCB_DF84_8B51_41CD_E3B15F0A60FD, this.albumitem_CF725CCB_DF84_8B51_41E2_679D94E9286E); this.loopAlbum(this.playList_D12966A8_DF84_87DF_41CA_FAC87B0D1B7F, 0)",
 "media": "this.album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C",
 "player": "this.viewer_uidCF724CCB_DF84_8B51_41E8_812AA3F24B40PhotoAlbumPlayer",
 "id": "albumitem_CF725CCB_DF84_8B51_41E2_679D94E9286E"
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "Desain Rencana",
   "click": "this.showPopupPanoramaOverlay(this.popup_D4ECE477_DA20_68C0_41CD_A106F075B430, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'paddingLeft':5,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverBorderSize':0,'borderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'paddingBottom':5,'rollOverBackgroundColorDirection':'vertical','iconHeight':20,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'rollOverIconWidth':20,'iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_C8841E57_DA20_58CF_41E8_6F67382DB7EF, null, null, null, null, false)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.58,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 206,
      "height": 158
     }
    ]
   },
   "pitch": -33.49,
   "yaw": 3.49
  }
 ],
 "id": "overlay_DA809F54_CBD5_4E04_41C0_3BC1488DB74A",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 7.58,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 3.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 20,
      "height": 16
     }
    ]
   },
   "pitch": -33.49
  }
 ]
},
{
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "viewer_uidCF724CCB_DF84_8B51_41E8_812AA3F24B40",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "toolTipFontSize": "1.11vmin",
 "toolTipOpacity": 1,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "minHeight": 50,
 "width": "100%",
 "playbackBarRight": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "minWidth": 100,
 "progressBarBorderSize": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "class": "ViewerArea",
 "shadow": false,
 "playbackBarBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "paddingRight": 0,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "paddingTop": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "paddingBottom": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "data": {
  "name": "ViewerArea3218"
 },
 "progressBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowSpread": 0
},
{
 "scrollBarWidth": 10,
 "id": "htmltext_CF704CCB_DF84_8B51_41CD_E3B15F0A60FD",
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "backgroundColorDirection": "vertical",
 "paddingRight": 10,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "width": "100%",
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 250,
  "easing": "cubic_in_out"
 },
 "minWidth": 0,
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 250,
  "easing": "cubic_in_out"
 },
 "backgroundOpacity": 0.7,
 "paddingTop": 5,
 "class": "HTMLText",
 "backgroundColor": [
  "#000000"
 ],
 "shadow": false,
 "paddingBottom": 5,
 "html": "",
 "data": {
  "name": "HTMLText3221"
 },
 "visible": false,
 "propagateClick": false,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ]
},
{
 "transparencyActive": false,
 "id": "component_CF708CCB_DF84_8B51_41DF_FC83E6D33BB4",
 "left": 10,
 "paddingLeft": 0,
 "paddingRight": 0,
 "borderSize": 0,
 "iconURL": "skin/album_left.png",
 "minHeight": 0,
 "verticalAlign": "middle",
 "top": "45%",
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 250,
  "easing": "cubic_in_out"
 },
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 250,
  "easing": "cubic_in_out"
 },
 "minWidth": 0,
 "mode": "push",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "click": "this.loadFromCurrentMediaPlayList(this.album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_AlbumPlayList, -1)",
 "class": "IconButton",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton3222"
 },
 "horizontalAlign": "center",
 "visible": false,
 "propagateClick": false,
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "transparencyActive": false,
 "id": "component_CF709CCB_DF84_8B51_41CE_B8166CE90262",
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": 10,
 "borderSize": 0,
 "iconURL": "skin/album_right.png",
 "minHeight": 0,
 "verticalAlign": "middle",
 "top": "45%",
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 250,
  "easing": "cubic_in_out"
 },
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 250,
  "easing": "cubic_in_out"
 },
 "minWidth": 0,
 "mode": "push",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "click": "this.loadFromCurrentMediaPlayList(this.album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_AlbumPlayList, 1)",
 "class": "IconButton",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton3223"
 },
 "horizontalAlign": "center",
 "visible": false,
 "propagateClick": false,
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "class": "PhotoAlbumPlayer",
 "viewerArea": "this.viewer_uidCF724CCB_DF84_8B51_41E8_812AA3F24B40",
 "id": "viewer_uidCF724CCB_DF84_8B51_41E8_812AA3F24B40PhotoAlbumPlayer"
}],
 "scrollBarWidth": 10,
 "children": [
  "this.MainViewer",
  "this.ThumbnailList_96C85140_9ACD_D28F_41DA_AEB5717EBF0E",
  "this.HTMLText_975BA4D8_9ACC_33BF_41B6_E382D41A8D4A",
  "this.MapViewer",
  "this.IconButton_DB947932_CBD5_721C_4181_10D28E6E6BBF",
  "this.IconButton_DD3B0FDD_CC2C_CE04_41CC_8A134CB1896A",
  "this.Image_CAE00CC7_DA20_59CF_41E6_248AF0EE22D0",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "id": "rootPlayer",
 "scrollBarColor": "#000000",
 "vrPolyfillScale": 0.5,
 "paddingLeft": 0,
 "paddingRight": 0,
 "mobileMipmappingEnabled": false,
 "borderSize": 0,
 "start": "this.init(); this.syncPlaylists([this.ThumbnailList_96C85140_9ACD_D28F_41DA_AEB5717EBF0E_playlist,this.mainPlayList]); this.playList_CF7A3CCB_DF84_8B51_41D1_6028922B7FBC.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_DB947932_CBD5_721C_4181_10D28E6E6BBF].forEach(function(component) { component.set('visible', false); }) }",
 "scrollBarVisible": "rollOver",
 "minHeight": 20,
 "scrollBarOpacity": 0.5,
 "buttonToggleFullscreen": "this.IconButton_DB947932_CBD5_721C_4181_10D28E6E6BBF",
 "scripts": {
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "existsKey": function(key){  return key in window; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "unregisterKey": function(key){  delete window[key]; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "registerKey": function(key, value){  window[key] = value; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getKey": function(key){  return window[key]; }
 },
 "scrollBarMargin": 2,
 "defaultVRPointer": "laser",
 "verticalAlign": "top",
 "minWidth": 20,
 "backgroundPreloadEnabled": true,
 "downloadEnabled": false,
 "contentOpaque": false,
 "width": "100%",
 "gap": 10,
 "paddingTop": 0,
 "layout": "absolute",
 "class": "Player",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Player475"
 },
 "horizontalAlign": "left",
 "height": "100%",
 "propagateClick": false,
 "borderRadius": 0,
 "desktopMipmappingEnabled": false,
 "mouseWheelEnabled": true,
 "overflow": "visible"
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
