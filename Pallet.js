function update(picker) {
    var c1,c2,c3,c4,c5,c6,c7,c8;
    var Rc = picker.channel('R');
    var Gc = picker.channel('G');
    var Bc = picker.channel('B');
    okColor = srgb_to_okhsl(Rc,Gc,Bc);
    var pallet = [c1,c2,c3,c4,c5,c6,c7,c8];
    var okPallet = [];

    H = okColor[0];
    S = okColor[1];
    L = okColor[2];

    incH = 0;
    incS = 0;
    incL = 0;
    // incHFac = 0.04;
    // incSFac = 0;
    // incLFac = 0;

    for (let index = 0; index < 4; index++) {
        var element = pallet[index];
        okElement = [H - incH, S - incS, L - incL];
        incH = incH + incHFac;
        incS = incS + incSFac;
        incL = incL + incLFac;
        element = okhsl_to_srgb(clip_value(okElement[0]), clip_value(okElement[1]), clip_value(okElement[2]));
        okPallet.push(element);
    };
    okPallet = okPallet.reverse();

    incH = incHFac;
    incS = incSFac;
    incL = incLFac;
    for (let index = 4; index < 8; index++) {
        var element = pallet[index];
        okElement = [H + incH, S + incS, L + incL];
        incH = incH + incHFac;
        incS = incS + incSFac;
        incL = incL + incLFac;
        element = okhsl_to_srgb(clip_value(okElement[0]), clip_value(okElement[1]), clip_value(okElement[2]));
        okPallet.push(element);
    };

    c1Hex = hex_Color(okPallet[0][0],okPallet[0][1],okPallet[0][2]);
    c2Hex = hex_Color(okPallet[1][0],okPallet[1][1],okPallet[1][2]);
    c3Hex = hex_Color(okPallet[2][0],okPallet[2][1],okPallet[2][2]);
    c4Hex = hex_Color(okPallet[3][0],okPallet[3][1],okPallet[3][2]);
    c5Hex = hex_Color(okPallet[4][0],okPallet[4][1],okPallet[4][2]);
    c6Hex = hex_Color(okPallet[5][0],okPallet[5][1],okPallet[5][2]);
    c7Hex = hex_Color(okPallet[6][0],okPallet[6][1],okPallet[6][2]);
    c8Hex = hex_Color(okPallet[7][0],okPallet[7][1],okPallet[7][2]);

    document.getElementById("Color1S").style.background= c1Hex;
    document.getElementById("Color1T").innerHTML= c1Hex;

    document.getElementById("Color2S").style.background= c2Hex;
    document.getElementById("Color2T").innerHTML= c2Hex;

    document.getElementById("Color3S").style.background= c3Hex;
    document.getElementById("Color3T").innerHTML= c3Hex;

    document.getElementById("Color4S").style.background= c4Hex;
    document.getElementById("Color4T").innerHTML= c4Hex;

    document.getElementById("Color5S").style.background= c5Hex;
    document.getElementById("Color5T").innerHTML= c5Hex;

    document.getElementById("Color6S").style.background= c6Hex;
    document.getElementById("Color6T").innerHTML= c6Hex;

    document.getElementById("Color7S").style.background= c7Hex;
    document.getElementById("Color7T").innerHTML= c7Hex;

    document.getElementById("Color8S").style.background= c8Hex;
    document.getElementById("Color8T").innerHTML= c8Hex;

    //document.getElementById("Color4S").style.background= hex_Color(Rc,Gc,Bc);
    //document.getElementById("Color4T").innerHTML= String(hex_Color(Rc,Gc,Bc));
    //console.log(hex_Color(Rc,Gc,Bc))
    //rgbColor = okhsl_to_srgb(okColor[0],okColor[1],okColor[2]);
    //console.log(rgbColor)
}
  jscolor.trigger('input');