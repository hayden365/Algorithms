from itertools import *
def solution(number):
    answer = 0
    
    li = list(permutations(number,3))
    for i in range(len(li)):
        if sum(li[i]) == 0:
            answer += 1
    
    return answer/6