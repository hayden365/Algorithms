# 꼭 필요한 자료구조 기초

탐색(Search) : 많은 양의 데이터 중에서 원하는 데이터를 찾는 과정
</br>
프로그래밍에서는 그래프, 트리 등의 자료구조 안에서 탐색을 하는 문제를 자주 다룬다.
대표적인 탐색 알고리즘으로 DFS, BFS가 있다.

자료구조(Data Structure) : 데이터르 표현하고 관리하고 처리하기 위한 구조
</br>
스택과 큐는 자료구조의 기초 개념으로 다음 두 핵심적인 함수로 구성된다.

- 삽입(Push) : 데이터를 삽입한다.
- 삭제(Pop) : 데이터를 삭제한다.

오버플로는 특정한 자료구조가 수용할 수 있는 데이터의 크기를 이미 가득 찬 상태에서 삽입 연산을 수행할 때 발생한다.</br>
언더플로는 특정한 자료구조에 데이터가 전혀 들어 있지 않은 상태에서 삭제 연산을 수행하면 데이터가 전혀 없는 상태이므로 발생한다.

## 스택

선입후출 또는 후입선출 구조이다. 박스 쌓기에 비유할 수 있다.

```python
stack = []

stack.append(5)
stack.append(2)
stack.append(3)
stack.append(7)
stack.pop()
stack.append(1)
stack.append(4)
stack.pop()

print(stack) # 최하단 원소부터 출력
print(stack[::-1]) # 최상단 원소부터 출력
```

결과는 다음과 같다.

```
[5, 2, 3, 1]
[1, 3, 2, 5]
```

파이썬에서 스택을 이용할 때는 별도의 라이브러리를 사용할 필요가 없다.
append()와 pop() 메서드를 이용하면 스택 자료구조와 동일하게 동작한다.

## 큐

큐는 대기 줄에 비유할 수 있다. 선입선출 구조이다.
</br>입구와 출구가 모두 뚫려있는 터널을 생각하면 편하다.

```python
from collections import deque

queue = deque()

queue.append(5)
queue.append(2)
queue.append(3)
queue.append(7)
queue.popleft()
queue.append(1)
queue.append(4)
queue.popleft()

print(queue) # 먼저 들어온 순서대로 출력
queue.reverse() # 다음 출력을 위해 역순으로 바꾸기
print(queue) # 나중에 들어온 원소부터 출력

```

결과는 다음과 같다.

```
deque([3, 7, 1, 4])
deque([4, 1, 7, 3])
```

collections 모듈에서 제공하는 deque 자료구조를 활용하자.
deque는 스택과 큐의 장점을 모두 채택한 것인데, </br>데이터를 넣고 빼는 속도가 리스트 자료형에 비해 효율적이며 queue 라이브러리를 이용하는 것보다 더 간단하다.

deque객체를 리스트 자료형으로 변겨하고자 한다면 list(queue)를 하면 리스트 자료형이 반환된다.

## 재귀 함수

재귀함수(Recursive Function)이란 자기 자신을 다시 호출하는 함수를 의미한다.

컴퓨터 내부에서 재귀 함수의 수행은 스택 자료구조를 이용한다. 따라서 스택 자료구조를 활용해야 하는 상당수 알고리즘은 재귀 함수를 이용해서 간편하게 구현될 수 있다. DFS가 대표적인 예이다.

팩토리얼 예제

```python
# 반복적으로 구현한 n!
def factorial_iterative(n):
  result = 1
  # 1부터 n까지의 수를 차례대로 곱하기
  for i in range(1, n + 1):
    result *= i
  return result

# 재귀적으로 구현한 n!
def factorial_recusive(n):
  if n <= 1: # n이 1 이하인 경우 1을 반환
    return 1
  # n! = n * (n - 1)!을 그대로 코드로 작성하기
  return n * factorial_recursive(n - 1)

print('반복적으로 구현:', factorial_iterative(5))
print('재귀적으로 구현:', factorial_recursive(5))

```
