define(
  [
    'example',
    'jasminejquery' ,
    'sinon'
  ], function (example, jasminejquery, sinon) {

    describe('example test', function () {

      var testObj =
        { example : example }
        , spy
        , fixture
        , div;

      spy = sinon.spy(testObj, 'example');


      /////////////////////////////////////
      //////////SETUP//////////////////////
      /////////////////////////////////////

      beforeEach(function () {
        fixture = jasminejquery.getFixtures();
        fixture.fixturesPath = 'base/tests/fixtures/';
        fixture.load('nestedDiv.html');

        //setup commonly used elements
        div = document.getElementById('inner');

      });

      //TEAR DOWN
      afterEach(function () {

        spy.reset();

      });


      //////////////////////////////////////
      ////////////SPEC//////////////////////
      //////////////////////////////////////


      it('can return hello world', function () {

        expect(example()).toBe('hello world');

      });

      it('can use a sinon Spy', function () {
        var str = testObj.example();

        expect(str).toBe('hello world');

        expect(spy.calledOnce).toBe(true);
      });

      it('can use a fixture', function () {

        expect(div).toBeTruthy();

      });

    });//describe
  });//define
