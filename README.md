## Habit Tracker
습관을 기록하는 웹 어플리케이션 📇
![실행화면](/public/images/habit.png)
<br><br>

## 프로젝트 소개  
리액트를 공부하는 목적으로 간단한 웹 어플리케이션을 만들어보았습니다. 
기록할 습관을 추가하고, 카운트 할 수 있습니다. 

## 기술스택 
- React

## 배운점 

- React란?
- 웹 UI를 만드는 라이브러리입니다. component 들로 구성되어있고, component 안에는 데이터를 담고 있는 state 오브젝트와 사용자에게 UI를 보여주는 render 함수가 있습니다. state에 변경이 일어나면 render 함수가 다시 호출되며 업데이트된 내용이 사용자에게 보입니다.

- Virtual DOM
  - Virtual DOM은 애플리케이션의 UI를 구성하는 HTML 엘리먼트를 메모리 내에서 구현한 것입니다. 리액트는 데이터의 변경이 일어날 때마다 애플리케이션 전체를 다시 렌더링합니다.  🙋‍♀️ 그렇다면 성능의 문제가 있지 않나요? 리액트 내부에서 Virtual DOM이 실질적으로 변경되어야 최소한의 것만 비교해서 랜더링 하므로 효율성이 높습니다.

- Babel
  - React는 순수 자바스크립트를 이용해 컴포넌트를 만든 것입니다. 브라우저는 HTML, CSS, Javascript만을 해석할 수 있습니다. 따라서 바벨을 이용해서 React를 순수 JS로 변환해 주는 역할을 합니다.

- React DOM
  - Babel을 통해 변환된 순수 JS와 HTML을 연결해주는 역할을 합니다.

- JSX
  - JSX가 개발되기 전엔 HTML 요소를 생성하려고 하면 React.createElement(‘h1’,{className:’title’,’Hello world’} 이처럼 복잡했습니다. JSX의 개발로 <h1 className=`large`>Hello World</h1> 이렇게 간단해졌고 즉, HTML처럼 보이는 코드를 작성할 수 있게 해주는 자바스크립트 문법의 확장입니다.


- 클래스 컴포넌트와 함수형 컴포넌트
  - 리액트애서 컴포넌트를 만드는 것은 클래스와 함수 두 가지 방법으로 나뉩니다. 클래스는 리액트에서 제공하는 컴포넌트 클래스를 상속해서 만듭니다.함수는 함수로써 컴포넌트에 상태가 없습니다. 항상 정적인 데이터가 표시된다면 함수형 컴포넌트가 적절합니다.❗️React 16.8 이상의 버전에선 리액트 훅이 등장했습니다. 이 리액트 훅에선 함수형 컴포넌트 안에서도 state, life cycle method를 사용할 수 있습니다.

- state와 props
  - state는 컴포넌트 안에서 내가 정의한 컴포넌트 state 오브젝트입니다. 이 state라는 오브젝트를 통해서 데이터의 업데이트가 발생하면 render 함수가 호출됩니다. props는 컴포넌트 밖에서 주어지는 데이터로, 컴포넌트의 재사용이 가능합니다.

- Life cycle Method
  - 클래스 기반 컴포넌트는 그들이 mount(DOM에 렌더링) 되었을 때, unmount될 때 등과 같이 그들의 생명주기 중 특정한 시점에 호출되는 특별한 메소드를 선언할 수 있습니다.
    - componentWillMount : 컴포넌트가 생성된 후 DOM에 렌더링 되기 전에 호출 됩니다.
    - componentDidMount: 처음으로 렌더링이 끝나고 컴포넌트의 DOM 엘리먼트가 사용될 때 호출 됩니다.

- Pure component
  - Pure component는 state와 props 안에 들어있는 최상위의 데이터가 변화하지 않으면 re-render 하지 않습니다. Pure component의 ShouldComponentUpdate()는 컴포넌트를 업데이트의 여부를 물어보는 함수입니다. 이전의 state와 props를 지금과 shallow comparison 해서 결정합니다.

## 느낀점 
- re-render, shallow comparison
  - 리액트를 프로젝트를 만들면서 render에 대해 생각해보게 되었습니다. 개발자도구의 Compoents> Highlight updates when components render. 옵션을 통해 re-render 되는 부분을 가시적으로 확인하면서 re-render 되지 않아도 되는데 랜더링 되는 것을 보고 효율적이지 않다고 생각했습니다. 마침 공부하면서 Pure component를 배우게 되었고 이를 적용하면서 렌더링을 방지하는 방법을 알게 되었습니다.
  - 오브젝트에 변수를 할당하면 변수에는 오브젝트에 들어있는 주소인 참조 값이 할당됩니다. 오브젝트는 값 자체가 변수에 저장되는 것이 아니라, 참조 값이 저장되기 때문에, Spread Operator를 이용해 완전히 새로운 배열을 만들어 참조 값을 다르게 만들어 ShouldComponentUpdate() 함수가 렌더링을 할 수 있게 만들어야 합니다.


## 실행 페이지 🔗 
- https://salangdung-i.github.io/habit-tracker/  

## Ref
https://reactjs.org/docs/introducing-jsx.html  
https://reactjs.org/docs/react-component.html#the-component-lifecycle  
https://velog.io/@dojunggeun/React-interview-questions-15  
https://reactjs.org/docs/react-api.html#reactpurecomponent









