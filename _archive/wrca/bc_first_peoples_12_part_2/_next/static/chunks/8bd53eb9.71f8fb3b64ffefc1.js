"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[51555], {
    51555: function(e, t, i) {
        i.d(t, {
            default: function() {
                return p
            }
        });
        var a = i(2784)
          , s = i(24782)
          , n = i(83648)
          , d = i(65804)
          , o = i(90991);
        const l = async e=>{
            e.data.narrativePanelPosition = "end" === e.data.narrativePanelPosition ? "start" : "end",
            await e.update(),
            await e.updateDescendents({
                updateDescendentsFirst: !0
            })
        }
          , r = async(e,t)=>{
            e.data.subtype = t;
            const i = e.getSelectedSlide();
            e.getChildrenBlocks().forEach((t=>{
                t.do("updateSubtypeWithoutUpdate", e.data.subtype)
            }
            )),
            await e.update(),
            i && await e.navigateToSlide(i)
        }
          , h = {
            ...o.tQ,
            updateLayout: {
                dispatch: async(e,t)=>e.dispatch({
                    event: "updateLayout",
                    data: {
                        layoutType: t
                    }
                }),
                handler: async(e,t)=>{
                    if (e.data.subtype === t.layoutType)
                        return;
                    const i = e.data.subtype;
                    return await r(e, t.layoutType),
                    {
                        undoable: !0,
                        title: `update sidecar layout to ${t.layoutType}`,
                        trackingDescription: "updateSidecarLayout",
                        undo: async()=>{
                            e.getNodeById(e.id) && await r(e, i)
                        }
                        ,
                        data: {
                            undoToastStringId: "builder.versioning.immersiveLayout.undo.toast.success",
                            redoToastStringId: "builder.versioning.immersiveLayout.redo.toast.success"
                        }
                    }
                }
            },
            updateNarrativePanelPosition: {
                dispatch: async e=>e.dispatch({
                    event: "updateNarrativePanelPosition"
                }),
                handler: async e=>(await l(e),
                {
                    undoable: !0,
                    title: `update narrative panel position to ${e.data.narrativePanelPosition}`,
                    trackingDescription: "updatePanelPosition",
                    undo: async()=>{
                        const t = e.getNodeById(e.id);
                        t && await l(t)
                    }
                })
            },
            updateNarrativePanelSize: {
                dispatch: o.Bz,
                handler: o.TI
            }
        }
          , c = (0,
        a.lazy)((()=>Promise.all([i.e(31884), i.e(81226), i.e(15829), i.e(63848), i.e(48514), i.e(71862), i.e(49822), i.e(67377), i.e(51961), i.e(2119), i.e(28360), i.e(5004)]).then(i.bind(i, 68074))))
          , u = (0,
        a.lazy)((()=>Promise.all([i.e(48514), i.e(51961), i.e(28360), i.e(3518)]).then(i.bind(i, 28360))));
        class S extends d.Z {
            static #e = (()=>{
                this.type = "immersive"
            }
            )();
            constructor(e) {
                super(e),
                this.onSlideshowNavArrowClicked = async e=>{
                    let t = this.childrenIds.indexOf(this.states.selectedSlideId);
                    const i = "previous" === e ? this.getPreviousVisibleChildIndex(t) : this.getNextVisibleChildIndex(t);
                    -1 !== i && (t = i);
                    const a = "beginning" === e ? this.getFirstVisibleChildId() : this.childrenIds[t];
                    if (!a)
                        return;
                    const s = this.childrenNodes[a];
                    s && (await this.navigateToSlide(s, !0),
                    this.root().emit("slideshow-navigation", s))
                }
                ,
                this.isSlideshowInteractable = ()=>this.states.isImmersiveShowing && !this.states.isTopInteractableSentinelShowing && !this.states.isBottomInteractableSentinelShowing,
                this.setInteractiveSentinelShowing = async(e,t)=>{
                    if ("undefined" === typeof this.states[e])
                        return;
                    const i = this.isSlideshowInteractable();
                    this.states[e] = t;
                    this.isSlideshowInteractable() !== i && await this.update({
                        skipSave: !0
                    })
                }
                ,
                this.data.type || (this.data.type = "sidecar"),
                this.data.subtype || (this.data.subtype = "docked-panel"),
                this.data.narrativePanelSize || (this.data.narrativePanelSize = "small"),
                this.addEventListener("rewind", (async()=>{
                    this.states.selectedSlideId !== this.getFirstVisibleChildId() && await this.updateSlidesActivity({
                        selectedIndex: this.getFirstVisibleChildIndex(),
                        isTransitionAnimated: !1
                    })
                }
                )),
                this.addEventListener("fastForward", (async()=>{
                    this.states.selectedSlideId !== this.getLastVisibleChildId() && await this.updateSlidesActivity({
                        selectedIndex: this.getLastVisibleChildIndex(),
                        isTransitionAnimated: !1
                    })
                }
                )),
                this.states.isTopSlideshowInteractableSentinelShowing = !1,
                this.states.isBottomSlideshowInteractableSentinelShowing = !1,
                this.states.hasNavigatedSlideshowSlides = !1
            }
            async onNodeAssembled(e) {
                this.subscribeGlobalState({
                    key: `legacy-docked-panel-position-${this.id}`,
                    id: this.id,
                    handler: async e=>{
                        this.data.narrativePanelPosition || (this.data.narrativePanelPosition = e,
                        await this.updateDescendents({
                            updateDescendentsFirst: !0
                        }),
                        await this.update({
                            skipSave: !0
                        }))
                    }
                    ,
                    isCustom: !0
                }),
                await super.onNodeAssembled(e)
            }
            getBlockComponent() {
                return "viewer" === this.mode ? u : c
            }
            getChildrenBlocks() {
                const e = super.getChildrenBlocks();
                for (const t of e)
                    t.states.dockedNarrativePanelPosition = this.data.narrativePanelPosition,
                    t.states.dockedNarrativePanelSize = this.data.narrativePanelSize;
                return e
            }
            async getViewerProps() {
                return {
                    ...await super.getViewerProps(),
                    subtype: this.data.subtype,
                    narrativePanelPosition: this.data.narrativePanelPosition,
                    isSlideshowInteractable: this.isSlideshowInteractable(),
                    hasNavigatedSlideshowSlides: this.states.hasNavigatedSlideshowSlides,
                    onSlideshowNavArrowClicked: this.onSlideshowNavArrowClicked,
                    setIsSlideshowTopInteractableSentinelShowing: e=>{
                        this.setInteractiveSentinelShowing("isTopInteractableSentinelShowing", e)
                    }
                    ,
                    setIsSlideshowBottomInteractableSentinelShowing: e=>{
                        this.setInteractiveSentinelShowing("isBottomInteractableSentinelShowing", e)
                    }
                }
            }
            async getBuilderProps() {
                return {
                    ...await super.getBuilderProps(),
                    ...await this.getViewerProps(),
                    updateNarrativePanelPosition: async()=>{
                        await h.updateNarrativePanelPosition.dispatch(this),
                        s.Z.trackEvent(s.Z.Category.Builder, s.Z.Action.Builder_SideCar_SwitchPanelPosition, "end" === this.data.narrativePanelPosition ? s.Z.Name.Builder_Sidecar_PanelPosition_DockedRight : s.Z.Name.Builder_Sidecar_PanelPosition_DockedLeft)
                    }
                    ,
                    updateNarrativePanelSize: async()=>{
                        await h.updateNarrativePanelSize.dispatch(this),
                        s.Z.trackEvent(s.Z.Category.Builder, s.Z.Action.Builder_SideCar_SwitchPanelSize, "small" === this.data.narrativePanelSize ? s.Z.Name.Builder_Sidecar_PanelSize_DockedSmall : "medium" === this.data.narrativePanelSize ? s.Z.Name.Builder_Sidecar_PanelSize_DockedMedium : s.Z.Name.Builder_Sidecar_PanelSize_DockedLarge)
                    }
                    ,
                    selectLayoutType: async e=>{
                        var t, i, a, s;
                        await h.updateLayout.dispatch(this, e),
                        null === (i = (a = this.getGlobalStates()).getPremiumBlocks) || void 0 === i || null === (t = (s = i.call(a)).checkBlock) || void 0 === t || t.call(s, this)
                    }
                }
            }
            getPremiumFeatures() {
                var e, t, i;
                const a = [];
                return (null === (i = null === (e = (t = this.getGlobalStates()).getPremiumFeaturesConfig) || void 0 === e ? void 0 : e.call(t)) || void 0 === i ? void 0 : i.sidecarFloatingPanelLayout) && "floating-panel" === this.data.subtype && a.push("sidecarFloatingPanelLayout"),
                a
            }
            getVisibleSlidePointer(e) {
                var t;
                return {
                    ...super.getVisibleSlidePointer(e),
                    summary: null === (t = e.do("getNarrativePanelBlock")) || void 0 === t ? void 0 : t.do("getSummary")
                }
            }
            getEvents() {
                return (0,
                n.G)(this, h)
            }
            async updateSlideshowSlidesActivity(e) {
                await super.updateSlidesActivity(e),
                this.states.hasNavigatedSlides || (this.states.hasNavigatedSlides = !0,
                await this.update({
                    skipSave: !0
                }))
            }
        }
        var p = S
    }
}]);
