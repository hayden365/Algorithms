def solution(brown, yellow):
    answer = []
    by = brown + yellow
    
    for h in range(3, by):
        w = int(by / h)

        if( ((w * h) == by) & (w >= h) & ( ((w-2) * (h-2)) == yellow)):                
            answer = [w, h]
            
    return answer