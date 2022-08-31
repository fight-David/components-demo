// vModelDialog.js
export default {
    model: {
        prop: 'visible',
        event: 'toggle'
    },
    props: {
        visible: {
            type: Boolean,
            default: () => {
                return false
            }
        }
    },
    computed: {
        innerVisible: {
            get: function () {
                return this.visible
            },
            set: function ( val ) {
                this.$emit( 'toggle', val )
            }
        }
    }
}