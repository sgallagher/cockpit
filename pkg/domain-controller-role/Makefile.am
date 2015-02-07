dc_js_PARTS = \
	pkg/domain-controller-role/dc_common.js \
	pkg/domain-controller-role/dc_deploy.js \
	pkg/domain-controller-role/dc_display.js \
	$(NULL)

dc.js: $(dc_js_PARTS)
	$(V_CHECK) $(srcdir)/tools/missing $(srcdir)/tools/jshint $^
	$(AM_V_GEN) cat $^ > $@.tmp && mv $@.tmp $@

dc.min.js: dc.js
	$(AM_V_GEN) $(srcdir)/tools/missing $(srcdir)/tools/uglifyjs $< --mangle > $@.tmp && mv $@.tmp $@

dcdir = $(pkgdatadir)/domain-controller-role

dc_DATA = \
	dc.js \
	dc.min.js \
	pkg/domain-controller-role/domaincontroller.html \
	pkg/domain-controller-role/domaincontroller.min.html \
	pkg/domain-controller-role/manifest.json \
	$(NULL)

noinst_DATA += \
	$(NULL)

dclangdir = $(pkgdatadir)/domain-controller-role/lang
dclang_DATA = \
	$(translations_json) \
	$(NULL)

dcimagesdir = $(pkgdatadir)/domain-controller-role/images
dcimages_DATA = \
	$(NULL)

# ----------------------------------------------------------------------

CHECK_HTML = \
	$(NULL)

TESTS += $(CHECK_HTML)

# ----------------------------------------------------------------------

lang/%.json : $(top_srcdir)/po/%.po
	$(AM_V_GEN) mkdir -p lang && $(PO2JSON) -p $(top_srcdir)/po/$*.po > lang/$*.json

CLEANFILES += \
	dc.js \
	dc.min.js \
	domaincontroller.min.html \
	$(NULL)

EXTRA_DIST += \
	$(dc_js_PARTS) \
	$(dc_DATA) \
	$(dcimages_DATA) \
	pkg/domain-controller-role/domaincontroller.html
	$(NULL)

