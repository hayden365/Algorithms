### BFS

Breadth First Search 알고리즘은 '너비 우선 탐색'이라는 의미를 가진다. 가까운 노드부터 탐색하는 알고리즘이다.
선입선출 방식인 큐 자료구조를 이용하는 것이 정석이다.

1. 탐색 시작 노드를 큐에 삽입하고 방문 처리를 한다.
2. 큐에서 노드를 꺼내 해당 노드의 인접 노드 중에서 방문하지 않은 노드를 모두 큐에 삽입하고 방문 처리를 한다.
3. 2.번의 과정을 더 이상 수행할 수 없을 때까지 반복한다.

실제로 구현할 때는 deque 라이브러리를 사용하는 것이 좋으며 탐색을 수행함에 있어 O(N)의 시간이 소요된다.

코딩테스트에서는 보통 DFS보다는 BFS 구현이 조금 더 빠르게 동작한다.

```python
from collections import deque

# BFS 메서드 정의
def bfs(graph, start, visited):
  # 큐(Queue) 구현을 위해 deque 라이브러리 사용
  queue = deque([start])
  # 현재 노드를 방문 처리
  visited[start] = True
  # 큐가 빌 때까지 반복
  while queue:
    # 큐에서 하나의 원소를 뽑아 출력
    v = queue.popleft()
    print(v, end=' ')
    # 해당 원소와 연결된, 아직 방문하지 않은 원소들을 큐에 삽입
    for i in graph[v]:
      if not visited[i]:
        queue.append(i)
        visited[i] = True
```
