<!-- 
Other names of Lazy Loading: 

-> Dynamic import
-> Chunking
-> Code Spliting
-> On Demand Loading
-> Dynamic bundeling
-> Bundle Spliting

 -->









 <!-- 

 What if we have two child of a parent and then the lifecycles of those component look like:  

 -> parent - contructor
 -> parent - render 
           child1 - constructor
           child1 - render

           child2 - constructor 
           child2 - render
           child2 - componentDidMount -> rerender

           child1 - componentDidMount -> rerender

-> parent - componentDidMount
 
-->




<!-- 
Component has two phase:
1: Render phase
2: Commit phase
 -->



<!-- 
If the child component is doing async call then the parent componentDidMount lifecycle get triggered befor child componentDidMount
 -->


<!-- <
Types of testing:
-Manual testing
-Automation testing
   --testing using selenium

-E2E testing - cover intire user journey
 
-Unit testing

-Integration testing














How to test app in react
-intstal react-testing-library/react
-Install jset
-configure jest
-install jest-enviroment-jsdom
-create first test case using test("",()=> expect(fun()).toBe())
-configure babel

> -->