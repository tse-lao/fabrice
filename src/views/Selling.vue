<template>
    <main>

        <div class="selling">
            <div class="address-list">
                <div class="address">
                    <h4>Verkoop punt 1</h4>
                    <span>Jacob van Lennepkade 137hs</span>
                    <span>1054 ZK Amsterdam</span>
                </div>
                <div class="address">
                    <h4>Verkooppunt 2</h4>
                    <span>Tweede Jacob van Campenstraat 72hs</span>
                    <span>1073 XT Amsterdam</span>
                </div>
            </div>
            <img src="../assets/photos/verkooppunten.jpeg" />
        </div>
    </main>
</template>
<script lang="js">

export default {
    name: "SellingView",
    setup() {
        
    },
}
</script>

<style lang="css">
.selling{
    display: flex;
    justify-content: center;
    margin: 2rem;
    flex-direction: column;
}
.address-list{
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-direction: row;  
    margin: 2rem;
}
 .address-list   span{
        display: block;    
    }

</style>