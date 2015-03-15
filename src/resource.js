var res = {
	HelloWorld_png : "res/HelloWorld.png",
    CloseNormal_png : "res/CloseNormal.png",
    CloseSelected_png : "res/CloseSelected.png",
    BG_Sprite_png : "res/eb_map.png",
    PandaSprite_png : "res/pandasprite.png",
    Song1_ogg : "res/audio/GameSong1.ogg",
    ClickFX1_wav : "res/audio/click1.wav"
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}