<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>The Variable here is greeting. But we are logging greetign which is an empty object. That's why the answer is A : {}, an empty object. </i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, '2');
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>In this function, a = 1 is a Number, but b = '2' is String. So when function calls a + b, it converts a = 1 in a string, then adds both string value, which is a and b. So by string concatenation, the answer is '12'</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ['🍕', '🍫', '🥑', '🍔'];
const info = { favoriteFood: food[0] };

info.favoriteFood = '🍝';

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i> By info.favoriteFood = '🍝', we changing the info object favoriteFood value from food[0] which is '🍕' to '🍝'. But it has no effect on the food array. That's why the array is unchanged and returning the original array ['🍕', '🍫', '🥑', '🍔'] </i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i> Here in sayHi function, we passed a parameter called name, but when we are logging it, we didn't give the parameter value and left it empty, Theat why the answer is Hi there, undefined . Because the name is not defined</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i> count variable starts at 0, and nums is an array which have four items. In nums.forEach , if statement checks whether each item is truthy or falsy. We know that 0 is falsy, so 0 don't go inside if statement and don't increase the value of count. But 1,2 and 3 are truthy, so these items go inside the if statement and increase count value by 1 on each iteration. That's why, atlast, the value of count is 3.</i>

</p>
</details>
