
// Create diagram for twoThreeTreeCON.
(function ($) {
  "use strict";

  var jsav = new JSAV("twoThreeTreeCON");

  // Create all the arrays that represent the nodes in the 2-3 tree.
  jsav.ds.array([18, 13], {left: "240px", top: "0px"});
  jsav.ds.array([12, ""], {left: "40px", top: "80px"});
  jsav.ds.array([23, 30], {left: "240px", top: "80px"});
  jsav.ds.array([48, ""], {left: "435px", top: "80px"});
  jsav.ds.array([10, ""], {left: "0px", top: "160px"});
  jsav.ds.array([15, ""], {left: "80px", top: "160px"});
  jsav.ds.array([20, 21], {left: "160px", top: "160px"});
  jsav.ds.array([24, ""], {left: "240px", top: "160px"});
  jsav.ds.array([31, ""], {left: "320px", top: "160px"});
  jsav.ds.array([45, 47], {left: "400px", top: "160px"});
  jsav.ds.array([50, 52], {left: "480px", top: "160px"});

  // Create lines that connect all the nodes.
  var properties = {"stroke-width": 1.5};
  jsav.g.line(243, 28, 73, 80, properties);
  jsav.g.line(274, 31, 274, 80, properties);
  jsav.g.line(306, 28, 469, 80, properties);
  jsav.g.line(44, 110, 24, 160, properties);
  jsav.g.line(74, 111, 114, 160, properties);
  jsav.g.line(244, 110, 194, 160, properties);
  jsav.g.line(274, 111, 274, 160, properties);
  jsav.g.line(304, 110, 354, 160, properties);
  jsav.g.line(437, 110, 434, 160, properties);
  jsav.g.line(468, 111, 514, 160, properties);

}(jQuery));

// Create slide show for simpleInsertCON
(function ($) {
  "use strict";
  var jsav = new JSAV("simpleInsertCON");

  /* 1st Slide *************************************************************/
  jsav.umsg("Simple insert into the 2-3 tree.");
  // Create all the arrays that represent the nodes in the 2-3 tree.
  var arr1 = jsav.ds.array([18, 13], {left: "240px", top: "0px"});
  var arr2 = jsav.ds.array([12, ""], {left: "40px", top: "80px"});
  var arr3 = jsav.ds.array([23, 30], {left: "240px", top: "80px"});
  var arr4 = jsav.ds.array([48, ""], {left: "435px", top: "80px"});
  var arr5 = jsav.ds.array([10, ""], {left: "0px", top: "160px"});
  var arr6 = jsav.ds.array([15, ""], {left: "80px", top: "160px"});
  var arr7 = jsav.ds.array([20, 21], {left: "160px", top: "160px"});
  var arr8 = jsav.ds.array([24, ""], {left: "240px", top: "160px"});
  var arr9 = jsav.ds.array([31, ""], {left: "320px", top: "160px"});
  var arr10 = jsav.ds.array([45, 47], {left: "400px", top: "160px"});
  var arr11 = jsav.ds.array([50, 52], {left: "480px", top: "160px"});
  var arr12 = jsav.ds.array([14], {left: "180px", top: "0px", visible: false});
  // Create lines that connect all the nodes.
  var properties = {"stroke-width": 1.5};
  var line1 = jsav.g.line(243, 28, 73, 81, properties);
  jsav.g.line(274, 31, 274, 80, properties);
  jsav.g.line(306, 28, 469, 81, properties);
  jsav.g.line(44, 110, 24, 160, properties);
  var line5 = jsav.g.line(74, 111, 114, 160, properties);
  jsav.g.line(244, 110, 194, 160, properties);
  jsav.g.line(274, 111, 274, 160, properties);
  jsav.g.line(304, 110, 354, 160, properties);
  jsav.g.line(437, 110, 434, 160, properties);
  jsav.g.line(468, 111, 514, 160, properties);
  // set initial display for first slide.
  jsav.displayInit();

  /* 2nd Slide *************************************************************/
  jsav.umsg("The value 14 is inserted into the tree. The value is first compared agains the root node.\nSince 14 is less than the left value of the root node it follows the left child node.");
  arr12.show();
  arr1.highlight(0);
  line1.css({"stroke": "red"});
  jsav.step();

  /* 3rd Slide *************************************************************/
  jsav.umsg("This node has only one element, and 14 is greater than 12 so the center child is followed next.");
  line1.css({"stroke": "black"});
  arr1.unhighlight(0);
  arr12.css({left: "40px", top: "40px"});
  arr2.highlight(0);
  line5.css({"stroke": "red"});
  jsav.step();

  /* 4th Slide *************************************************************/
  jsav.umsg("A leaf node has being reached. Since the leaf node has an empty space the new node can be inserted here.");
  line5.css({"stroke": "black"});
  arr2.unhighlight(0);
  arr12.css({left: "80px", top: "200px"});
  arr6.highlight(0);
  jsav.step();

  /* 5th Slide *************************************************************/
  jsav.umsg("The new key 14 is less than 15 so the key 15 has to be moved to the right to make room for the new key.");
  arr6.unhighlight(0);
  arr6.swap(0, 1, {arrow: false});
  jsav.step();

  /* 6th Slide *************************************************************/
  jsav.umsg("Finally the key 14 is inserted into the 2-3 tree.");
  arr6.value(0, 14);
  arr12.hide();
  // Mark the slide show as finished.
  jsav.recorded();

}(jQuery));

// Create slide show for promoteCON
(function ($) {
  "use strict";
  var jsav = new JSAV("promoteCON");

  /* 1st Slide *************************************************************/
  jsav.umsg("A simple node-splitting insert for a 2-3 tree.");
  // Create all the arrays that represent the nodes in the 2-3 tree.
  var arr1 = jsav.ds.array([18, 13], {left: "240px", top: "0px"});
  var arr2 = jsav.ds.array([12, ""], {left: "40px", top: "80px"});
  var arr3 = jsav.ds.array([23, 30], {left: "240px", top: "80px"});
  var arr4 = jsav.ds.array([48, ""], {left: "480px", top: "80px"});
  var arr5 = jsav.ds.array([10, ""], {left: "0px", top: "160px"});
  var arr6 = jsav.ds.array([15, ""], {left: "80px", top: "160px"});
  var arr7 = jsav.ds.array([20, 21], {left: "160px", top: "160px"});
  var arr8 = jsav.ds.array([24, ""], {left: "240px", top: "160px"});
  var arr9 = jsav.ds.array([31, ""], {left: "320px", top: "160px"});
  var arr10 = jsav.ds.array([45, 47], {left: "400px", top: "160px"});
  var arr11 = jsav.ds.array([50, 52], {left: "480px", top: "160px"});
  var arr12 = jsav.ds.array([55], {left: "340px", top: "0px", visible: false});
  var arr13 = jsav.ds.array(["", ""], {left: "560px", top: "160px", visible: false});
  // Create lines that connect all the nodes.
  var properties = {"stroke-width": 1.5};
  jsav.g.line(243, 28, 73, 80, properties);
  jsav.g.line(274, 31, 274, 80, properties);
  var line3 = jsav.g.line(306, 28, 514, 80, properties);
  jsav.g.line(44, 110, 24, 160, properties);
  jsav.g.line(74, 111, 114, 160, properties);
  jsav.g.line(244, 110, 194, 160, properties);
  jsav.g.line(274, 111, 274, 160, properties);
  jsav.g.line(304, 110, 354, 160, properties);
  jsav.g.line(482, 109, 434, 160, properties);
  var line10 = jsav.g.line(514, 111, 514, 160, properties);
  // set initial display for first slide.
  jsav.displayInit();

  /* 2nd Slide *************************************************************/
  jsav.umsg("The value 55 is inserted into the tree. The value is first compared agains the root node.\nSince 55 is more than the right value of the root node it follows the right child node.");
  arr12.show();
  arr1.highlight(1);
  line3.css({"stroke": "red"});
  jsav.step();

  /* 3rd Slide *************************************************************/
  jsav.umsg("This node has only one element, and 55 is greater than 48 so the center child is followed next.");
  line3.css({"stroke": "black"});
  arr1.unhighlight(1);
  arr12.css({left: "480px", top: "40px"});
  arr4.highlight(0);
  line10.css({"stroke": "red"});
  jsav.step();

  /* 4th Slide *************************************************************/
  jsav.umsg("A leaf node has being reached. Since the leaf node has no empty spaces it will have to be split.");
  line10.css({"stroke": "black"});
  arr4.unhighlight(0);
  arr12.css({left: "500px", top: "200px"});
  arr11.highlight(0);
  arr11.highlight(1);
  jsav.step();

  /* 5th Slide *************************************************************/
  jsav.umsg("Now that the leaf node has being split, the largest key will go on the newly created node. The smallest key will go on the old node, and the middle value will be promoted.");
  arr12.css({left: "540px", top: "200px"});
  arr13.show();
  arr6.unhighlight(0);
  jsav.step();

  /* 6th Slide *************************************************************/
  jsav.umsg("The middle value, 52, is now promoted to the parent node.");
  arr11.value(1, "");
  arr12.value(0, 52);
  arr13.value(0, 55);
  arr12.highlight(0);
  arr11.unhighlight(0);
  arr11.unhighlight(1);
  jsav.step();

  /* 7th Slide *************************************************************/
  jsav.umsg("Since 52 is greater than 48, it is placed on the right, and the pointer to the newly created node is stablished.");
  arr12.css({left: "520px", top: "40px"});
  arr12.unhighlight(0);
  jsav.step();

  /* 8th Slide *************************************************************/
  jsav.umsg("The new value has being inserted into the tree.");
  arr12.hide();
  arr4.value(1, 52);
  jsav.g.line(548, 109, 595, 161, properties);
  jsav.step();
  // Mark the slide show as finished.
  jsav.recorded();

}(jQuery));

// Create slide show for splitCON
(function ($) {
  "use strict";
  var jsav = new JSAV("splitCON");

  /* 1st Slide *************************************************************/
  jsav.umsg("Example of inserting a record that causes the 2-3 tree root to split.");
  // Create all the arrays that represent the nodes in the 2-3 tree.
  var arr1 = jsav.ds.array([18, 13], {left: "290px", top: "80px"});
  var arr2 = jsav.ds.array([12, ""], {left: "50px", top: "160px"});
  var arr3 = jsav.ds.array([23, 30], {left: "290px", top: "160px"});
  var arr4 = jsav.ds.array([48, ""], {left: "530px", top: "160px"});
  var arr5 = jsav.ds.array([10, ""], {left: "-40px", top: "240px"});
  var arr6 = jsav.ds.array([15, ""], {left: "50px", top: "240px"});
  var arr7 = jsav.ds.array([20, 21], {left: "210px", top: "240px"});
  var arr8 = jsav.ds.array([24, ""], {left: "290px", top: "240px"});
  var arr9 = jsav.ds.array([31, ""], {left: "370px", top: "240px"});
  var arr10 = jsav.ds.array([45, 47], {left: "530px", top: "240px"});
  var arr11 = jsav.ds.array([50, 52], {left: "610px", top: "240px"});

  var arr12 = jsav.ds.array([19], {left: "240px", top: "50px", visible: false});
  var arr13 = jsav.ds.array(["", ""], {left: "210px", top: "240px", visible: false});
  var arr14 = jsav.ds.array(["", ""], {left: "330px", top: "160px", visible: false});
  // Create lines that connect all the nodes.
  var properties = {"stroke-width": 1.5};
  var line1 = jsav.g.line(293, 108, 83, 160, properties);
  var line2 = jsav.g.line(324, 111, 324, 160, properties);
  var line3 = jsav.g.line(356, 108, 564, 160, properties);
  var line4 = jsav.g.line(63, 190, 0, 240, properties);
  var line5 = jsav.g.line(83, 191, 83, 240, properties);
  var line6 = jsav.g.line(294, 190, 244, 240, properties);
  var line7 = jsav.g.line(324, 191, 324, 240, properties);
  var line8 = jsav.g.line(354, 190, 404, 240, properties);
  var line9 = jsav.g.line(564, 191, 564, 240, properties);
  var line10 = jsav.g.line(598, 189, 645, 241, properties);
  // set initial display for first slide.
  jsav.displayInit();

  /* 2nd Slide *************************************************************/
  jsav.umsg("The value 19 is inserted into the tree. The value is first compared agains the root node.\nSince 19 is more than the left value and less than the right value of the root node it follows the center child node.");
  arr12.show();
  arr1.highlight(1);
  arr1.highlight(0);
  line2.css({"stroke": "red"});
  jsav.step();

  /* 3rd Slide *************************************************************/
  jsav.umsg("This node has only two elements, and 19 is less than 23 so the left child is inspected next.");
  line3.css({"stroke": "black"});
  line2.css({"stroke": "black"});
  arr1.unhighlight(1);
  arr1.unhighlight(0);
  arr12.css({left: "240px", top: "140px"});
  arr3.highlight(0);
  line6.css({"stroke": "red"});
  jsav.step();

  /* 4th Slide *************************************************************/
  jsav.umsg("A leaf node has being reached. Since the leaf node has no empty spaces it will have to be split.");
  line10.css({"stroke": "black"});
  arr3.unhighlight(0);
  arr12.css({left: "220px", top: "280px"});
  arr7.highlight(0);
  arr7.highlight(1);
  jsav.step();

  /* 5th Slide *************************************************************/
  jsav.umsg("Now that the leaf node has being split, the largest key will go on the newly created node. The smallest key will go on the old node, and the middle value will be promoted.");
  var tempLine = jsav.g.line(294, 190, 164, 240, properties);
  line6.css({"stroke": "black"});
  line6.hide();
  arr7.css({left: "130px"});
  arr7.unhighlight(1);
  arr7.unhighlight(0);
  arr13.show();
  arr6.unhighlight(0);
  jsav.step();

  /* 6th Slide *************************************************************/
  jsav.umsg("The middle value, 19, is now promoted to the parent node.");
  arr7.value(1, "");
  arr7.value(0, 19);
  arr12.value(0, 20);
  arr13.value(0, 21);
  arr12.highlight(0);
  arr11.unhighlight(0);
  arr11.unhighlight(1);
  jsav.step();

  /* 7th Slide *************************************************************/
  jsav.umsg("The parent node is also full, so it has to be split.");
  arr12.css({left: "260px", top: "120px"});
  arr12.unhighlight(0);
  jsav.step();

  /* 8th Slide *************************************************************/
  jsav.umsg("Again, the largest value goes into the newly created node. The smalles in the old node, and the middle value is promoted.");
  tempLine.hide();
  jsav.g.line(214, 190, 184, 240, properties);
  var tempLine2 = jsav.g.line(244, 191, 324, 240, properties);
  var tempLine3 = jsav.g.line(264, 190, 404, 239, properties);
  jsav.g.line(324, 111, 244, 160, properties);
  arr14.show();
  arr12.css({left: "300px"});
  arr3.css({left: "210px"});
  line2.hide();
  line6.hide();
  line7.hide();
  line8.hide();
  jsav.step();

  /* 8th Slide *************************************************************/
  jsav.umsg("The links to the child nodes are updated.");
  tempLine2.hide();
  tempLine3.hide();
  jsav.g.line(244, 190, 244, 240, properties);
  jsav.g.line(334, 191, 324, 240, properties);
  jsav.g.line(364, 190, 404, 239, properties);
  arr3.value(0, 20);
  arr3.value(1, "");
  arr14.value(0, 30);
  arr12.value(0, 23);
  // Mark the slide show as finished.
  jsav.recorded();

}(jQuery));
