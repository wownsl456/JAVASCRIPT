let myVoca = {
    // 코드를 작성해 주세요.
    addVoca: function (EnglishLanguage,mean){
      myVoca[EnglishLanguage] = mean;
    },
    deleteVoca: function (EnglishLanguage){
    delete myVoca[EnglishLanguage];
    },
    printVoca: function (EnglishLanguage){
      console.log(`"${EnglishLanguage}"의 뜻은 "${myVoca[EnglishLanguage]}"입니다.`);
    }
  }
  
  // addVoca메소드 테스트 코드
  myVoca.addVoca('parameter', '매개 변수');
  myVoca.addVoca('element', '요소');
  myVoca.addVoca('property', '속성');
  console.log(myVoca);
  /* 결과값 = * {parameter: "매개변수", element: "요소", addVoca: f, deleteVoca: f, printVoca: f} */

  // deleteVoca메소드 테스트 코드
  myVoca.deleteVoca('parameter');
  myVoca.deleteVoca('element');
  console.log(myVoca);
  /* 결과값 = * {property: "속성", addVoca: f, deleteVoca: f, printVoca: f} */

  // printVoca메소드 테스트 코드
  myVoca.printVoca('property');
  /* 결과값 = * "property"의 뜻은 "속성"입니다. */