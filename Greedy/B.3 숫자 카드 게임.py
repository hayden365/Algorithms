# 그리디 알고리즘 유형의 문제는 문제 해결을 위한 아이디어를 떠올렸다면 정답을 찾을 수 있다.
# 각 행마다 가장 작은 수를 찾은 뒤에 그 수 중에서 가장 큰 수

# min() 함수를 이용하는 경우
n, m = map(int, input().split())

result = 0

for i in range(n):
  data = list(map(int, input().split()))
  min_value = min(data)
  result = max(result, min_value)

print(result)

# 2중 반복문 구조를 이용하는 경우
n, m = map(int, input().split())

result = 0

for i in range(n):
  data = list(map(int, input().split()))
  min_value = 10001
  for a in data:
    min_value = min(min_value, a)
  result = max(result, min_value)

print(result)
