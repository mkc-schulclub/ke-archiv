<template>
    <div class="container mt-2">
        <div class="row">
            <div class="col-12">
                <div class="loading-dots">
                    <span class="loading-dot"></span>
                    <span class="loading-dot"></span>
                    <span class="loading-dot"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.loading-dots {
    text-align: center;
}
.loading-dot {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 0 5px;
    background-color: var(--accent);
    border-radius: 50%;
    animation: loading 1s infinite;
}
@keyframes loading {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.5);
    }
}
</style>