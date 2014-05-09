// testing creating a slide show for buffer pool

// slide show for example 9.4.1
(function ($) {
  var jsav = new JSAV("TestCON");
  var arr = jsav.ds.array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], {layout: "vertical"});
  var buffer_pool = jsav.ds.array(["", "", "", "", ""], {layout: "vertical", indexed: true, left: 600, top: 40});
  jsav.label("Secondary Storage (On Disk)", {left: 120, top: 475});
  jsav.label("Main Memory (in RAM)", {left: 550, top: 300});
  jsav.umsg("Using LRU replacement scheme. The following series of memory request occurs: 9 0 1 7 6 6");
  jsav.displayInit();

  jsav.step();
  jsav.umsg("Buffer Pool will store sector 9 in main memory");
  buffer_pool.value(4, 9);
  
  jsav.step();
  jsav.umsg("Buffer Pool will store sector 0 in main memory");
  buffer_pool.value(3, 0);
  
  jsav.step();
  jsav.umsg("Buffer Pool will store sector 1 in main memory");
  buffer_pool.value(2, 1);
  
  jsav.step();
  jsav.umsg("Buffer Pool will store sector 7 in main memory");
  buffer_pool.value(1, 7);
  
  jsav.step();
  jsav.umsg("Buffer Pool will store sector 6 in main memory");
  buffer_pool.value(0, 6);
  
  jsav.recorded();

}(jQuery));

// slide show for example 9.4.2
(function ($) {
  var jsav = new JSAV("Test2CON");
  var on_disk = jsav.ds.array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], {layout: "vertical"});
  var buffer_pool = jsav.ds.array([1, 7, 5, 3, 8], {layout: "vertical", indexed: true, left: 600, top: 40});
  jsav.label("Secondary Storage (On Disk)", {left: 120, top: 475});
  jsav.label("Main Memory (in RAM)", {left: 550, top: 300});
  jsav.umsg("Assume that sectors 1, 7, 5, 3, and 8 are currently in the buffer pool, stored in this order, and that we use the LRU buffer replacement strategy. ")
  jsav.displayInit();

  jsav.step();
  jsav.umsg("If a request for Sector~9 is then received, then one sector currently in the buffer pool must be replaced. Because the buffer containing Sector 8 is the least recently used buffer");
  jsav.umsg("Contents of sector 8 will be copied back to disk. The contents of Sector 9 are then copied into this buffer, and it is moved to the front of the Buffer Pool");
  buffer_pool.value(0, 9);
  buffer_pool.value(1, 1);
  buffer_pool.value(2, 7);
  buffer_pool.value(3, 5);
  buffer_pool.value(4, 8);

  jsav.step();
  jsav.umsg("If the next memory request were to sector 5, then no data would need to be read from disk. Istead, the buffer already containing Sector 5 would be moved to the front of the buffer pool");
  buffer_pool.value(0, 5);
  buffer_pool.value(1, 9);
  buffer_pool.value(2, 1);
  buffer_pool.value(3, 7);
  buffer_pool.value(4, 8);

  jsav.recorded();
}(jQuery));
